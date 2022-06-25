import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article as ArticleProps } from "../types";
import styles from "./Grid.module.css";

const Article = ({ title, image, id, ...props }: ArticleProps) => {
  return (
    <div className={styles.article} {...props}>
      <Link href={"/articles/" + id}>
        <a>
          <h3 className={styles.headline}>{title}</h3>

          {image && (
            <div className={styles["image-wrapper"]}>
              <Image
                layout="fill"
                src={image}
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
