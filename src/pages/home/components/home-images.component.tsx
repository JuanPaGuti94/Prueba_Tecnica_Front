import { FC } from 'react';
export const HomeImages: FC = () => {
  return (
    <div className={`w-full flex flex-col md:flex-row items-center justify-center mt-4 gap-[16px] md:gap-[24px]`}>
      <div className='flex gap-[16px] md:gap-[24px]'>
      <img
        src="https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695527370x215503643979881860/AI-Generated-Image.png?&w=1187.2&h=896&fit=crop&crop=entropy"
        alt="first"
        className="w-[100px] rounded"
      />
      <img
        src="https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695547378x985923804507233800/AI-Generated-Image.png?&w=1187.2&h=896&fit=crop&crop=entropy"
        alt="second"
        className="w-[100px] rounded"
      />
      <img
        src="https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695541501x739778700496779800/AI-Generated-Image.png?&w=1187.2&h=896&fit=crop&crop=entropy"
        alt="third"
        className="w-[100px] rounded"
      />
      </div>
      <div className='flex gap-[16px] md:gap-[24px]'>
      <img
        src="https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695535218x349499336543612740/AI-Generated-Image.png?&w=1187.2&h=896&fit=crop&crop=entropy"
        alt="four"
        className="w-[100px] rounded"
      />
      <img
        src="https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695529288x816723896920791600/AI-Generated-Image.png?&w=1187.2&h=896&fit=crop&crop=entropy"
        alt="five"
        className="w-[100px] rounded"
      />
      </div>
    </div>
  );
};
