import React from "react";
import styles from "../styles/mystack.module.css";
import Image from "next/image";

const MyStack = () => {
  return (
    <section data-scroll-section>
      <p className={styles.heading}>My Stack</p>

      {/* 1st container */}
      <div className={styles.tech_stack_container}>
        <span>
          <Image
            src={"/tech_stack/html.png"}
            height={30}
            width={30}
            alt="html_pic"
          />
          HTML
        </span>

        <span>
          <Image
            src={"/tech_stack/css.png"}
            height={30}
            width={30}
            alt="CSS_pic"
          />
          CSS
        </span>

        <span>
          <Image
            src={"/tech_stack/javascript.png"}
            height={30}
            width={30}
            alt="JavaScript_pic"
          />
          JavaScript
        </span>

        <span>
          <Image
            src={"/tech_stack/react.png"}
            height={30}
            width={30}
            alt="React_pic"
          />
          React
        </span>

        <span>
          <Image
            src={"/tech_stack/typescript.png"}
            height={30}
            width={30}
            alt="TypeScript_pic"
          />
          TypeScript
        </span>
      </div>

      {/* 2nd container */}
      <div className={styles.tech_stack_container}>
        <span>
          <Image
            src={"/tech_stack/nextjs.svg"}
            height={30}
            width={30}
            alt="nextjs_pic"
          />
          Next.js
        </span>

        <span>
          <Image
            src={"/tech_stack/scss.png"}
            height={30}
            width={30}
            alt="SCSS_pic"
          />
          SCSS
        </span>

        <span>
          <Image
            src={"/tech_stack/tailwind.png"}
            height={20}
            width={30}
            alt="tailwindcss_pic"
          />
          Tailwindcss
        </span>

        <span>
          <Image
            src={"/tech_stack/git.png"}
            height={30}
            width={30}
            alt="git_pic"
          />
          Git
        </span>

        <span>
          <Image
            src={"/tech_stack/chakra_ui.png"}
            height={30}
            width={30}
            alt="chakra_ui_pic"
          />
          Chakra UI
        </span>
      </div>

      {/* 3rd container */}
      <div className={styles.tech_stack_container}>
        <span>
          <Image
            src={"/tech_stack/figma.png"}
            height={30}
            width={30}
            alt="figma_pic"
          />
          Figma
        </span>

        <span>
          <Image
            src={"/tech_stack/canva.png"}
            height={30}
            width={30}
            alt="canva_pic"
          />
          Canva
        </span>

        <span>
          <Image
            src={"/tech_stack/firebase.png"}
            height={30}
            width={30}
            alt="firebase_pic"
          />
          Firebase
        </span>

        <span>
          <Image
            src={"/tech_stack/github.png"}
            height={30}
            width={30}
            alt="github_pic"
          />
          GitHub
        </span>

        <span>
          <Image
            src={"/tech_stack/antd.png"}
            height={30}
            width={30}
            alt="antd_pic"
          />
          AntD
        </span>
      </div>
    </section>
  );
};

export default MyStack;
