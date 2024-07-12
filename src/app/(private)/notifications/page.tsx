import React from "react";
import styles from "./notifications.module.scss";

function NotificationsPage() {
  return (
    <section className="private-section">
      <div className={`private-container ${styles["nots"]}`}></div>
    </section>
  );
}

export default NotificationsPage;
