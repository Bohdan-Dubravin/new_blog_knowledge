import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Author } from '../../api/dto/global-feed.in';

export enum NameStyleEnum {
  GREEN = 'GREEN',
  LIGHT = 'LIGHT',
}

enum MetaDirectionEnum {
  ROW = 'ROW',
  COL = 'COL',
}

enum NameSizeEnum {
  SM = 'SM',
  BASE = 'BASE',
}

// interface ArticleAuthorProps {
//   author: Author;
//   publishedAt: string;
//   nameStyle?: keyof typeof NameStyleEnum;
//   direction?: keyof typeof MetaDirectionEnum;
//   nameSize?: keyof typeof NameSizeEnum;
// }

interface AuthorProps extends Author {}

export const ArticleAuthor = ({
  username,
  image,
  bio,
  following,
}: AuthorProps) => {
  console.log(username);

  const usernameClasses = clsx('font-medium flex-col', {
    // "text-white hover:text-white": nameStyle === NameStyleEnum.LIGHT,
    // "text-date": nameSize === NameSizeEnum.SM,
  });

  const metaClasses = clsx('mr-6 ml-0.3 leading-4 inline-flex flex-col', {
    // "flex-col": direction === MetaDirectionEnum.COL,
    // "flex-row items-center gap-2": direction === MetaDirectionEnum.ROW,
  });

  const imgClasses = clsx(
    'inline-block rounded-full h-8 w-8 object-cover object-center',
    {
      // "h-8 w-8": nameSize === NameSizeEnum.BASE,
      // "h-5 w-5": nameSize === NameSizeEnum.SM,
    }
  );

  return (
    <div className="flex">
      <Link to={`/@`}>
        <img src={image} alt={` avatar`} className={imgClasses} />
      </Link>
      <div className={metaClasses}>
        <Link to={`/@`} className={usernameClasses}>
          {username}
        </Link>
        <span className="text-conduit-gray-500 text-date">
          {/* {DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATE_FULL)} */}
          {bio}
        </span>
      </div>
    </div>
  );
};
