import { Dialog, Transition } from '@headlessui/react';
import { Auth } from '@supabase/auth-ui-react';
import { FC, Fragment } from 'react';
import { useTranslation } from 'next-i18next';

import { ThemeSupa } from '@supabase/auth-ui-shared';
import { SupabaseClient } from '@supabase/supabase-js';

type Props = {
  onClose: () => void;
  supabase: SupabaseClient;
};

export const AuthModel: FC<Props> = ({ onClose, supabase }) => {
  const { t } = useTranslation('model');

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose} open>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-neutral-800 text-neutral-200">
                <div>
                  📣 {t('Sign up to get access to all the amazing features of PanayaoBot!')}
                </div>
                <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                  providers={[]}
                  theme="dark"
                />
                <div className="text-sm text-neutral-400 text-center">
                  {t('By signing up, you agree to our ')} 
                  <a
                    href="https://intro.chateverywhere.app/terms-of-service.html"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {t('Terms of Service.')}
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
