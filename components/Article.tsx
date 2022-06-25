import React from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import { Article as ArticleType } from "../types";
import styles from "./Grid.module.css";

type ArticleComponentProps = ArticleType & {
  placementIndex: number;
};

const Article = ({
  // destructure all known article props first
  title,
  image,
  id,
  author,
  description,
  url,
  source,
  category,
  language,
  country,
  published_at,
  placementIndex,
  ...props
}: ArticleComponentProps) => {
  const displayImage = [3, 4, 5].includes(placementIndex);
  const displayLargeImage = [3].includes(placementIndex);
  const displayDescription = [1, 3, 6, 7].includes(placementIndex);

  return (
    <div className={styles.article} {...props}>
      {image && displayImage && (
        <div
          className={classnames(styles["image-wrapper"], {
            [styles["image-wrapper-lg"]]: displayLargeImage
          })}
        >
          <Image
            layout="fill"
            src={image}
            quality={100}
            alt="article"
            objectFit="cover"
          />
        </div>
      )}

      <Link href={"/articles/" + id}>
        <a>
          <h3 className={styles.headline}>{title}</h3>
        </a>
      </Link>

      {description && displayDescription && (
        <p className={styles.description}>{description}</p>
      )}

      {author && <p className={styles.author}>By {author}</p>}
    </div>
  );
};

export default Article;
