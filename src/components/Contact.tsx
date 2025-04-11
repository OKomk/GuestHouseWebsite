import React from 'react';

import { PhoneIcon, MailIcon } from '@heroicons/react/outline';

import config from '../config/index.json';

const Contact = () => {
  const { contact } = config;
  const { title, description, phone, email } = contact;

  return (
    <div id="contact" className="bg-background dark:bg-dark-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <PhoneIcon
                      className="h-6 w-6 text-primary dark:text-dark-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                      Phone
                    </h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                      <a
                        href={`tel:${phone.number}`}
                        className="text-primary dark:text-dark-primary hover:underline"
                      >
                        {phone.display}
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {phone.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MailIcon
                      className="h-6 w-6 text-primary dark:text-dark-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                      Email
                    </h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                      <a
                        href={`mailto:${email.address}`}
                        className="text-primary dark:text-dark-primary hover:underline"
                      >
                        {email.display}
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {email.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
