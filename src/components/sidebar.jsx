import * as React from 'react'
import { Link } from 'gatsby'

export default ({ back }) => (
    <div className='fixed flex flex-col items-center justify-center space-y-12 px-12 py-24 h-screen'>
        {back && (
            <Link to='/'>
                <div className='absolute top-10 left-10 flex flex-col space-y-1 items-center text-center'>
                    <svg
                        className='w-6 fill-current'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 19l-7-7m0 0l7-7m-7 7h18'
                        />
                    </svg>
                    <span className='text-xs font-light'>Back Home</span>
                </div>
            </Link>
        )}
        <div className='flex flex-col items-center space-y-6'>
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://snapchat.com'
                className='w-6'
                title='Follow us on Snapchat'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512.853 512.853'
                    className='w-8'
                >
                    <path d='M500.907 376.747c-64.853-11.093-93.867-75.947-97.28-83.627v-.853c-3.413-6.827-4.267-11.947-2.56-16.213 3.413-7.68 17.92-12.8 27.307-15.36 2.56-.853 5.12-1.707 6.827-2.56 17.92-7.68 27.307-17.067 27.307-28.16 0-8.533-6.827-17.067-17.067-20.48-3.413-1.707-7.68-2.56-11.947-2.56-2.56 0-6.827.853-11.093 2.56-8.533 3.413-15.36 5.973-20.48 5.973-1.707 0-3.413 0-5.12-.853.853-2.56.853-5.12.853-8.533v-1.707c1.707-34.987 5.12-78.507-6.827-104.107-34.987-76.8-107.52-82.773-128.853-82.773h-10.24c-21.333 0-93.867 5.973-128 82.773-11.947 25.6-9.387 69.12-6.827 104.107.853 3.413.853 6.827.853 10.24-1.707 0-4.267.853-6.827.853-6.827 0-13.653-1.707-22.187-5.973-11.947-5.12-34.987 2.56-37.547 17.92-1.707 8.533 1.707 20.48 27.307 30.72 1.707.853 4.267 1.707 7.68 2.56 8.533 2.56 23.04 7.68 26.453 15.36 1.707 3.413.853 9.387-2.56 16.213-1.707 2.56-31.573 71.68-98.987 82.773C4.267 376.747 0 382.72 0 389.547c0 2.56.853 4.267 1.707 5.973 5.12 13.653 27.307 22.187 67.413 29.013.853 2.56 1.707 7.68 2.56 10.24.853 3.413 1.707 7.68 2.56 11.947.853 4.267 5.12 11.093 15.36 11.093 3.413 0 7.68-.853 11.947-1.707 6.827-1.707 15.36-3.413 26.453-3.413 6.827 0 12.8.853 19.627 2.56 11.947 1.707 23.04 9.387 34.987 17.92 17.92 12.8 34.133 22.187 67.413 22.187H256c29.013 0 54.613-7.68 76.8-22.187 11.947-7.68 23.04-16.213 34.987-17.92 5.973-.853 12.8-1.707 18.773-1.707 10.24 0 18.773.853 26.453 2.56 5.12.853 9.387 1.707 12.8 1.707 6.827 0 12.8-4.267 14.507-11.093.853-4.267 1.707-7.68 2.56-11.947.853-1.707 1.707-6.827 2.56-9.387 40.107-5.973 59.733-15.36 65.707-28.16.853-1.707 1.707-4.267 1.707-5.973-.001-6.826-5.121-13.653-11.947-14.506zM440.32 408.32c-10.24.853-11.947 11.093-14.507 22.187-.853 2.56-1.707 5.973-2.56 9.387-1.707 0-4.267 0-8.533-.853-8.533-1.707-17.92-3.413-29.867-3.413-6.827 0-13.653.853-21.333 1.707-15.36 2.56-29.013 11.947-41.813 21.333C302.933 472.32 281.6 478.293 256 478.293h-4.266c-28.16 0-41.813-8.533-58.027-19.627-12.8-9.387-25.6-18.773-41.813-21.333-6.827-.853-14.507-1.707-21.333-1.707-12.8 0-23.04 1.707-29.867 3.413-3.413.853-5.973 1.707-8.533 1.707-.853-3.413-1.707-6.827-2.56-10.24-2.56-11.093-4.267-21.333-14.507-23.04-37.547-5.12-50.347-12.8-54.613-16.213 69.973-14.507 102.4-82.773 106.667-92.16 5.12-11.093 5.973-21.333 2.56-29.867-6.827-15.36-25.6-21.333-37.547-24.747-2.56 0-4.267-.853-5.973-1.707C71.68 236.8 69.12 231.68 69.12 230.827c0-2.56 5.973-5.973 11.093-5.973h2.56c10.24 5.12 20.48 7.68 29.013 7.68 12.8 0 19.627-5.973 21.333-7.68s2.56-3.413 2.56-5.973c0-5.12-.853-10.24-.853-15.36-2.56-33.28-5.12-74.24 5.12-96.427 29.867-67.413 93.867-72.533 112.64-72.533h9.386c18.773 0 82.773 5.12 113.493 70.827 9.387 22.187 6.827 63.147 5.12 96.427v1.707c0 5.12-.853 9.387-.853 13.653 0 2.56.853 5.12 2.56 6.827 1.707 1.707 7.68 6.827 20.48 7.68 8.533-.853 17.067-3.413 27.307-7.68 1.707-.853 5.973-.853 9.387.853 4.267 1.707 5.973 4.267 5.973 5.12 0 1.707-3.413 6.827-17.067 11.947-1.707.853-4.267 1.707-6.827 2.56-11.093 3.413-29.867 9.387-36.693 24.747-4.267 8.533-2.56 18.773 2.56 29.867 3.413 8.533 34.987 78.507 105.813 93.013-4.265 3.411-16.212 10.238-52.905 16.211z' />
                </svg>
            </a>
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://instagram.com'
                className='w-6'
                title='Follow us on Instagram'
            >
                <svg
                    viewBox='0 0 512.00096 512.00096'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-7'
                >
                    <path d='M373.40625 0h-234.8125C62.171875 0 0 62.171875 0 138.59375v234.816406C0 449.828125 62.171875 512 138.59375 512h234.816406C449.828125 512 512 449.828125 512 373.410156V138.59375C512 62.171875 449.828125 0 373.40625 0zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219V138.59375c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0' />
                    <path d='M256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094S178.804688 395.996094 256 395.996094 395.996094 333.195312 395.996094 256 333.195312 116.003906 256 116.003906zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0M399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0' />
                </svg>
            </a>
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://www.youtube.com'
                className='w-6'
                title='Subscribe on Youtube'
            >
                <svg
                    className='w-8'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 49 49'
                >
                    <path d='M39.256 6.5H9.744C4.371 6.5 0 10.885 0 16.274v16.451c0 5.39 4.371 9.774 9.744 9.774h29.512c5.373 0 9.744-4.385 9.744-9.774V16.274c0-5.389-4.371-9.774-9.744-9.774zM47 32.726c0 4.287-3.474 7.774-7.744 7.774H9.744C5.474 40.5 2 37.012 2 32.726V16.274C2 11.988 5.474 8.5 9.744 8.5h29.512c4.27 0 7.744 3.488 7.744 7.774v16.452z' />
                    <path d='M33.36 24.138l-13.855-8.115c-.308-.18-.691-.183-1.002-.005s-.503.509-.503.868v16.229c0 .358.192.69.502.868.154.088.326.132.498.132.175 0 .349-.046.505-.137l13.855-8.113c.306-.179.495-.508.495-.863s-.188-.685-.495-.864zM20 31.37V18.63l10.876 6.371L20 31.37z' />
                </svg>
            </a>
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://www.twitter.com'
                className='w-6'
                title='Follow us on Twitter'
            >
                <svg
                    className='w-8'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                >
                    <path d='M507.413 93.394c-3.709-2.51-8.607-2.383-12.174.327-3.612 2.735-9.474 5.087-16.138 7.016 18.245-21.301 18.623-35.541 18.408-38.893-.245-3.801-2.541-7.168-5.985-8.791-3.459-1.612-7.51-1.23-10.587 1.005-21.893 15.908-43.689 19.373-56.791 19.76-20.337-19.342-46.704-29.944-74.74-29.944-60.271 0-109.307 49.684-109.307 110.751 0 4.944.327 9.878.969 14.771C138.176 167.645 54.665 69.155 53.803 68.119c-2.184-2.617-5.5-4.041-8.929-3.714-3.398.296-6.444 2.235-8.148 5.189-29.005 50.322-11.286 94.725 6.505 121.327-1.837-1.092-3.342-2.097-4.372-2.857-3.143-2.337-7.337-2.725-10.852-.995-3.521 1.735-5.771 5.286-5.837 9.209-.786 48.255 21.764 76.49 43.674 92.49-2.372.327-4.597 1.459-6.266 3.276-2.51 2.724-3.393 6.576-2.311 10.122 15.194 49.735 52.041 67.352 76.373 73.587-49.22 37.138-120.557 25.016-121.348 24.867-4.73-.831-9.464 1.663-11.408 6.082-1.939 4.413-.612 9.587 3.225 12.51 52.464 40.041 115.21 48.913 160.53 48.913 34.272 0 58.573-5.077 60.91-5.582 228.617-54.179 235.864-263.063 235.394-298.66 42.888-39.929 49.633-55.255 50.684-59.067 1.184-4.314-.51-8.906-4.214-11.422zm-64.13 58.358c-2.33 2.143-3.56 5.235-3.346 8.398.036.561 3.536 57.179-21.694 120.266-33.709 84.291-100.164 138.725-197.307 161.746-1.041.219-90.905 18.831-169.792-18.689 33.725-1.414 80.429-10.913 113.292-47.806 2.745-3.077 3.398-7.833 1.709-11.593-1.689-3.75-5.439-6.51-9.551-6.51h-.071c-2.76 0-50.337-.357-73.133-46.306 9.219.398 20.24-.145 29.122-4.237 4.092-1.888 6.51-6.1 6.005-10.574-.505-4.475-3.821-8.079-8.23-9.008-2.556-.541-57.649-12.836-66.143-72.693 8.464 3.526 19.015 6.257 29.51 4.685 4.031-.602 7.332-3.5 8.474-7.413 1.138-3.908-.107-8.13-3.184-10.809-2.383-2.07-54.327-48.273-30.541-107.973 28.158 29.332 108.46 102.368 205.833 96.786 3.107-.179 5.975-1.74 7.82-4.25 1.843-2.51 2.471-5.709 1.71-8.728-1.837-7.316-2.77-14.857-2.77-22.418 0-49.546 39.658-89.853 88.409-89.853 23.842 0 46.203 9.515 62.97 26.796 1.923 1.985 4.556 3.122 7.322 3.174 9.658.092 25.561-.949 43.531-7.633-5.359 6.275-12.852 13.622-23.332 21.852-3.622 2.847-4.954 7.735-3.276 12.026 1.684 4.301 6.056 7.02 10.566 6.607 2.112-.168 12.352-1.071 24.352-3.505-6.876 7.31-16.044 16.433-28.255 27.662z' />
                </svg>
            </a>
        </div>
    </div>
)
