# haiku-post

## 概要

haiku-postは、俳句投稿サービスです。

<figure>
  <figcaption>サーバ構成図</figcaption>
  <img src="images/architecture.png" width="400" />
</figure>

<figure>
  <figcaption>ホーム画面</figcaption>
  <img src="images/home.png" width="400" />
</figure>

<figure>
  <figcaption>アップロード画面</figcaption>
  <img src="images/upload.png" width="400" />
</figure>

## 機能一覧

- ユーザ登録
- 認証(サインアップ/ログイン/パスワード再送信)
- 俳句投稿
- 画像アップロード
- マイページ

## 開発環境

<table>
  <tr>
    <td>言語</td>
    <td>TypeScript 5.2.2</td>
  </tr>
   <tr>
    <td>データベース</td>
    <td>PostgreSQL 15.7</td>
  </tr>
  <tr>
    <td>開発サーバ</td>
    <td>Vite 5.2.0</td>
  </tr>
  <tr>
    <td>フレームワーク</td>
    <td>Material UI 5.15.19</td>
  </tr>
  <tr>
    <td>サービス</td>
    <td>Firebase, Hasura</td>
  </tr>
   <tr>
    <td>主なライブラリ</td>
    <td>Apollo Client 3.10.4, GraphQL 16.8.1</td>
  </tr>
</table>
