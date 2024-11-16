import { FC } from 'react';
import { LabelPage } from '../label-footer/label-footer.component';
import useScreenSize from '@/hooks/useScreenSize.hook';
import useStage from '@/hooks/stage-store.hook';

export const Footer: FC = () => {
  const { width } = useScreenSize();
  const { step } = useStage();
  return (
    <div>
      <div
        className={`${
          step === 'home'
            ? 'bg-[#FFFFFF] text-black '
            : 'bg-[#3C6090] text-white '
        }  flex ${
          width < 768 && ' flex-col gap-4 '
        } items-center justify-between px-10 py-10`}
      >
        <div className="flex gap-[12px]">
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https://dcd03715478de5e275023800fc42e909.cdn.bubble.io/f1731695514842x936712205183281900/AI-Generated-Image.png?&w=1024&h=1024&fit=crop&crop=entropy"
            alt="icon"
            className="w-[32px] h-[32px] rounded-full"
          />
          <p className=" text-[24px]">OrderTrack</p>
        </div>

        <div className=" flex items-center justify-end">
          <div className={`flex ${width < 768 && ' flex-col gap-10 '}`}>
            <div className={`flex`}>
              <LabelPage title={'Product'} text={['Overview', 'Customers']} />
              <LabelPage title={'Company'} text={['About', 'Jobs']} />
            </div>
            <div className={`flex`}>
              <LabelPage title={'Support'} text={['FAQs', 'Contact us']} />
              <LabelPage title={'Terms'} text={['Terms', 'Terms']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
