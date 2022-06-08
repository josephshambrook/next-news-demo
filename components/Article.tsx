import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Article as ArticleProps } from "../types";
import styles from "./Article.module.css";

const Article = ({ title, ...props }: ArticleProps) => {
  return (
    <div className={styles.article}>
      <Link href={"/articles/" + props.id}>
        <a>
          <h3>{title}</h3>

          {props.image && (
            <div className={styles.imageWrapper}>
              <Image
                layout="fill"
                src={props.image}
                quality={100}
                alt="article"
                objectFit="cover"
              />
            </div>
          )}
        </a>
      </Link>
    </div>
  );
};

export default Article;
