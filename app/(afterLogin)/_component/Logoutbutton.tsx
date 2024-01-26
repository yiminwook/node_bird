/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./logoutButton.module.css";

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "zerohch0",
    nickname: "제로초",
    image: "/5Udwvqim.jpg",
  };

  const onLogout = () => {};

  return (
    <button className={styles.logoutButton} onClick={onLogout}>
      <div className={styles.logoutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={styles.logoutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
