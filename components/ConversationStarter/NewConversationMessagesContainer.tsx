import { FC, useContext, useState } from 'react';

import { useTranslation } from 'next-i18next';
import { event } from 'nextjs-google-analytics';

import HomeContext from '@/pages/api/home/home.context';

import { FootNoteMessage } from './FootNoteMessage';
import { RolePlayPrompts } from './RolePlayPrompts';
import { SamplePrompts } from './SamplePrompts';

type Props = {
  promptOnClick: (prompt: string) => void;
};

export const NewConversationMessagesContainer: FC<Props> = ({
  promptOnClick,
}) => {
  const { t } = useTranslation('chat');
  const {
    state: { user, isSurveyFilled },
    dispatch,
  } = useContext(HomeContext);

  const [rolePlayMode, setRolePlayMode] = useState(true);

  const switchButtonOnClick = () => {
    setRolePlayMode(!rolePlayMode);
  };

  const roleOnClick = (roleName: string, roleContent: string) => {
    promptOnClick(roleContent);

    event('interaction', {
      category: 'New Conversation',
      label: roleName,
    });
  };

  const bannerOnClick = () => {
    if (user) {
      dispatch({ field: 'showProfileModel', value: true });
    } else {
      dispatch({ field: 'showLoginSignUpModel', value: true });
    }

    event('Support banner clicked', {
      category: 'Engagement',
      label: 'Banner',
    });
  };

  const surveyOnClick = () => {
    dispatch({ field: 'showSurveyModel', value: true });

    event('Survey banner clicked', {
      category: 'Engagement',
      label: 'survey_banner',
    });
  };
  const featureOnClick = () => {
    dispatch({ field: 'showFeaturesModel', value: true });
    event('Feature banner clicked', {
      category: 'Engagement',
      label: 'feature_introduction_banner',
    });
  };

  return (
    <div className="font-normal">
      <span className="font-semibold">Chat Everywhere</span>

      {rolePlayMode ? (
        <RolePlayPrompts roleOnClick={roleOnClick} />
      ) : (
        <SamplePrompts promptOnClick={promptOnClick} />
      )}
      <button
        className="border border-neutral-600 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md text-sm mb-3 dark:text-gray-100 dark:hover:bg-transparent"
        onClick={switchButtonOnClick}
      >
        {rolePlayMode
          ? t('Switch to Sample Prompts')
          : t('Switch to Role Play')}
      </button>
      <FootNoteMessage />
    </div>
  );
};
