import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, name, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        {...props}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
