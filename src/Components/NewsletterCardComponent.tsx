import react, { FunctionComponent, useState } from "react";
import styles from "./NewsletterCardComponent.module.css";

type Props = {};

const NewsletterCardComponent: FunctionComponent<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [isConsentChecked, setisConsentChecked] = useState<boolean>(false);

  const handleSubmit = () => {
    if (validateEmail()) {
      window.alert("Successfully Subscribed");
    }
  };

  const validateEmail = () => {
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (email && !regex.test(email)) {
      window.alert("please enter a valid email address");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#E6E9FB",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: " 10px 10px #f1f2fe",
          padding: "40px 72px",
        }}
      >
        <p
          style={{
            fontSize: "32px",
            fontFamily: "sans-serif",
            fontWeight: 600,
            textAlign: "center",
            margin: "0px",
            color: "#111827",
          }}
        >
          Level Up Your Frontend Skills
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 300,
            textAlign: "center",
            color: "#111827",
          }}
        >
          Sign up for our free newsletter to receive weekly coding challenges
          that will help you improve your frontend development skills.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <input
            style={{
              flexGrow: "1",
              border: "1px solid #E6E9FB",
              borderRadius: "4px",
              outline: "none",
              padding: "0px 16px",
            }}
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => {
              setEmail(event.target?.value);
            }}
            onBlur={() => {
              validateEmail();
            }}
          />
          <button
            className={styles.button}
            onClick={() => {
              handleSubmit();
            }}
          >
            Subscribe
          </button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="checkbox"
            className={styles.checkbox}
            onChange={(event) => setisConsentChecked(event.target.checked)}
          />
          <p style={{ fontSize: "10px", color: "#111827" }}>
            By checking this box, you agree to receive our weekly newsletter
            containing coding chanllenges, tips, and other related content. you
            may unsubscribe from the newsletter at any time
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCardComponent;
