import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useInsertHaikuMutation } from '../graphql/generated';
import { storage } from '../firebase/config';
import { useRecoilValue } from 'recoil';
import { GlobalUser } from '../stores/user';

interface UploadProps {
  haiku: string;
  ownerId: string;
}

export const useUploadHaiku = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [mutation, { error: apolloError }] = useInsertHaikuMutation();
  const user = useRecoilValue(GlobalUser);

  const uploadStorage = (id: string, file: File, path: string) => {
    const exe = file.name.split('.').pop();
    return storage.ref(`${path}/${id}.${exe}`).put(file);
  };

  const upload = async ({ haiku, ownerId }: UploadProps) => {
    if (!user?.id) {
      return;
    }
    setLoading(true);

    const haikuId = uuidv4();

    try {
      const haikuUploadTask = await uploadStorage(haikuId, file.haiku, 'haikus');
      const res = await mutation({
        variables: {
          id: haikuId,
          haiku,
          owner_id: ownerId,
        },
      });
      return res.data?.insert_haikus_one;
    } catch (error) {
      console.error(error);
      setError(new Error('Error occurred while uploading a haiku'));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (apolloError) {
      console.error(apolloError);
      setError(new Error('An error has occurred in GraphQL'));
    }
  }, [apolloError]);

  return {
    upload,
    loading,
    error,
  };
};
