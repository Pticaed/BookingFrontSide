import React, { useState } from "react";
import { Icon } from '@iconify/react';
import "../registerModal/RegisterModal.scss";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

const RegisterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      newErrors.email = "Email обовʼязковий";
    } else if (trimmedEmail.length > 255) {
      newErrors.email = "Максимальна довжина 255 символів";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Невірний формат email";
    }

    const trimmedPassword = password.trim();

    if (!trimmedPassword) {
      newErrors.password = "Пароль обовʼязковий";
    } else if (trimmedPassword.length < 8) {
      newErrors.password = "Мінімум 8 символів";
    } else if (trimmedPassword.length > 64) {
      newErrors.password = "Максимум 64 символи";
    } else if (!passwordRegex.test(trimmedPassword)) {
      newErrors.password =
        "Пароль повинен містити велику, малу літеру та цифру";
    }

    if (!repeatPassword.trim()) {
      newErrors.repeatPassword = "Підтвердіть пароль";
    } else if (trimmedPassword !== repeatPassword.trim()) {
      newErrors.repeatPassword = "Паролі не співпадають";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const payload = {
        email: email.trim(),
        password: password.trim(),
      };

      console.log("Register data:", payload);

      onClose();
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose}>
          ×
        </button>

        <h2 className="modal__title">Register</h2>

        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <div className="modal__field">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`modal__input ${errors.email ? "error" : ""}`}
            />
            {errors.email && (
              <span className="modal__error">{errors.email}</span>
            )}
          </div>

          <p className="modal__hint">
            We will send you an email to confirm your email address
          </p>

          <div className="modal__field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`modal__input ${errors.password ? "error" : ""}`}
            />
            {errors.password && (
              <span className="modal__error">{errors.password}</span>
            )}
          </div>

          <div className="modal__field">
            <input
              type="password"
              placeholder="Repeat password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className={`modal__input ${
                errors.repeatPassword ? "error" : ""
              }`}
            />
            {errors.repeatPassword && (
              <span className="modal__error">
                {errors.repeatPassword}
              </span>
            )}
          </div>

          <p className="modal__policy">
            *Get acquainted with our Privacy policy
          </p>

          <button type="submit" className="modal__continue">
            Continue
          </button>
          <div className="modal__social">
            <button type="button">
              <Icon icon="logos:google-icon" width="24" height="24" />
              Sign In with Google
            </button>

            <button type="button">
              <Icon icon="logos:facebook" width="24" height="24" />
              Sign In with Facebook
            </button>

            <button type="button">
              <Icon icon="logos:apple" width="24" height="24" />
              Sign In with Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
