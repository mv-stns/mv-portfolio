import clsx from "clsx";

const variants = {
    primary: 'text-zinc-700 dark:text-zinc-500',
    brand: 'text-orange-500 dark:text-orange-400'
}

export function Signature({variant = 'primary', className, ...props}) {
    return (
        <svg width="140" height="47" viewBox="0 0 140 47" fill="none" aria-hidden="true"
             className={clsx(variants[variant], className)}
        >
            <g clipPath="url(#clip0_16_2)">
                <path
                    d="M46.6878 28.9185C46.9856 28.8269 47.2813 28.7203 47.5834 28.6436C48.4853 28.4156 49.3894 28.2004 50.2956 27.981C50.9229 27.8297 51.5482 27.6699 52.1797 27.542C52.6951 27.4376 53.2232 27.395 53.7365 27.2863C54.1442 27.2011 54.537 27.0392 54.9426 26.9497C55.1665 26.9007 55.4115 26.9539 55.6375 26.9113C56.1719 26.8133 56.6979 26.6769 57.2302 26.5725C57.6949 26.4809 58.168 26.4234 58.6328 26.3275C59.0784 26.2359 59.5178 26.1038 59.9635 26.01C60.2677 25.9461 60.5803 25.9291 60.8844 25.8715C61.0577 25.8396 61.2203 25.7501 61.3935 25.7139C61.7441 25.6414 62.099 25.5881 62.4518 25.5221C63.5269 25.3239 64.6 25.1194 65.6772 24.9297C65.861 24.8978 66.0574 24.934 66.2454 24.9212C66.3215 24.917 66.3933 24.8488 66.4714 24.8402C66.6784 24.8125 66.8897 24.7742 67.0967 24.7891C67.2783 24.8019 67.4431 24.8978 67.6015 24.6996C67.6607 24.625 67.8317 24.6314 67.9521 24.6208C68.8266 24.5419 69.7032 24.4716 70.5777 24.3843C70.696 24.3715 70.7995 24.2586 70.9178 24.2202C71.0593 24.1755 71.2177 24.0156 71.355 24.2543C71.3762 24.2926 71.505 24.2799 71.5832 24.2692C72.4872 24.1627 73.3892 24.0476 74.2932 23.9453C75.0198 23.8644 75.7465 23.7898 76.4731 23.7259C77.8059 23.6065 79.143 23.5064 80.4738 23.3722C80.7399 23.3445 80.9955 23.1996 81.2574 23.1079C81.2701 23.142 81.2806 23.1761 81.2933 23.2102C81.1919 23.2294 81.0927 23.2486 80.9913 23.2678C80.9913 23.2827 80.9934 23.2997 80.9955 23.3146C81.4708 23.2869 81.9481 23.2763 82.4213 23.223C82.567 23.206 82.6959 23.0568 82.8437 23.0035C82.9557 22.9631 83.0888 22.9801 83.2303 23.0227C83.1669 23.0589 83.1014 23.0973 83.0381 23.1335C83.055 23.1442 83.0719 23.1633 83.0867 23.1612C83.8365 23.1207 84.5885 23.0802 85.3383 23.0334C86.0227 22.9908 86.705 22.9332 87.3894 22.8991C88.0653 22.865 88.7433 22.8395 89.4193 22.831C89.7192 22.8267 90.0192 22.8906 90.3212 22.9013C90.4965 22.9077 90.6719 22.8672 90.9148 22.8395C90.8092 22.7649 90.769 22.7372 90.7289 22.7074C90.7331 22.6882 90.7373 22.669 90.7416 22.6498C90.8134 22.6669 90.9105 22.6626 90.9528 22.7074C91.1366 22.9055 91.3055 22.88 91.4978 22.7244C91.5823 22.6562 91.7048 22.588 91.7343 22.7926C91.7365 22.8096 91.7977 22.8373 91.8146 22.8288C92.047 22.6861 92.3004 22.946 92.4905 22.8331C93.0461 22.5028 93.6122 22.9034 94.1635 22.7692C94.2205 22.7542 94.2965 22.816 94.3641 22.8373C94.4212 22.8544 94.4993 22.8991 94.5331 22.8778C94.9492 22.6072 95.6737 22.6157 96.1406 22.8075C96.3983 22.9119 96.7193 22.8608 97.0129 22.88C97.0974 22.8864 97.1819 22.9141 97.2643 22.9055C97.6023 22.8714 97.9402 22.8331 98.2761 22.7841C98.312 22.7798 98.3373 22.6988 98.3754 22.7116C100.283 22.9034 102.186 22.7606 104.089 22.8054C104.089 22.7756 104.089 22.7436 104.089 22.7138C104.049 22.701 104.011 22.6882 103.96 22.6733C103.99 22.6562 104.009 22.6392 104.026 22.6392C104.264 22.6392 104.503 22.62 104.74 22.6413C105.122 22.6754 105.5 22.7479 105.88 22.7777C106.039 22.7905 106.203 22.7393 106.379 22.7138C106.381 22.6967 106.375 22.75 106.351 22.9268C106.541 22.8033 106.653 22.6797 106.786 22.6541C106.958 22.62 107.175 22.6008 107.315 22.6797C107.663 22.8757 108.086 22.9055 108.493 22.7265C108.611 22.6733 108.772 22.718 108.924 22.718C108.831 22.7372 108.749 22.7521 108.669 22.7692C108.669 22.8011 108.669 22.8352 108.669 22.8672C109.53 22.9141 110.392 22.9631 111.277 23.0121C111.288 22.9375 111.298 22.8608 111.319 22.7031C111.592 23.2124 112.035 22.9908 112.388 23.0611C112.866 23.1548 113.364 23.157 113.854 23.1633C114.01 23.1633 114.165 23.0334 114.327 23.0057C114.49 22.978 114.741 22.9375 114.813 23.0227C115.153 23.4254 115.584 23.3125 116.009 23.3317C116.892 23.37 117.772 23.4489 118.655 23.5085C119.38 23.5575 120.102 23.6002 120.827 23.6619C121.011 23.6769 121.188 23.7727 121.372 23.794C121.623 23.8217 121.877 23.8068 122.13 23.8175C122.274 23.8239 122.417 23.8388 122.561 23.8601C123.685 24.0199 124.808 24.184 125.932 24.3417C126.285 24.3907 126.68 24.2884 126.944 24.6421C127.622 24.559 128.184 24.9532 128.801 25.1151C129.422 25.2771 130.026 25.5093 130.634 25.716C131.05 25.8566 131.052 25.8715 130.877 26.172C130.93 26.3914 130.987 26.5576 131.006 26.7281C131.023 26.8836 130.613 27.1755 130.442 27.1372C129.43 26.9113 128.418 26.6748 127.404 26.4554C127.02 26.3723 126.629 26.3254 126.243 26.2487C125.715 26.1443 125.195 26.0036 124.665 25.9227C124.211 25.8524 123.746 25.8566 123.29 25.8055C122.774 25.7479 122.263 25.6606 121.75 25.5903C121.568 25.5647 121.384 25.537 121.201 25.5285C120.829 25.5114 120.457 25.5178 120.088 25.4901C119.644 25.456 119.205 25.3964 118.763 25.3474C118.303 25.2962 117.844 25.228 117.384 25.1961C116.94 25.1641 116.495 25.1599 116.049 25.1535C115.838 25.1492 115.624 25.1939 115.417 25.1705C114.906 25.113 114.399 25.0192 113.888 24.9638C113.611 24.934 113.33 24.9638 113.052 24.9596C112.202 24.9447 111.353 24.9383 110.504 24.9042C109.854 24.8786 109.205 24.7976 108.554 24.7785C107.976 24.7614 107.393 24.8062 106.812 24.8062C106.132 24.8062 105.449 24.787 104.769 24.7785C103.914 24.7678 103.058 24.7657 102.203 24.7508C101.495 24.7401 100.785 24.6996 100.078 24.7039C99.4526 24.7103 98.8274 24.7827 98.2022 24.7891C96.7658 24.8062 95.3273 24.7934 93.891 24.8062C93.3333 24.8104 92.7778 24.8637 92.2223 24.8743C91.3774 24.8914 90.5325 24.8914 89.6875 24.8935C88.906 24.8956 88.1244 24.8679 87.3429 24.8935C86.1305 24.934 84.9159 24.9979 83.7056 25.0682C82.5375 25.1364 81.3694 25.2067 80.2034 25.3069C79.1958 25.3942 78.1925 25.5306 77.1871 25.6308C76.3506 25.7139 75.5099 25.7714 74.6734 25.8524C73.9024 25.9269 73.1336 26.0228 72.3647 26.108C71.6972 26.1826 71.0255 26.2423 70.3602 26.3339C69.3167 26.4788 68.2753 26.645 67.2361 26.8069C66.2475 26.9625 65.259 27.118 64.2725 27.2906C63.077 27.4994 61.8857 27.7295 60.6901 27.9447C59.7164 28.1195 58.7405 28.275 57.7688 28.4583C56.6092 28.6756 55.4517 28.8993 54.2983 29.1444C52.6951 29.4853 51.0919 29.8262 49.4971 30.2055C47.7756 30.6146 46.0647 31.0642 44.3516 31.5052C43.5637 31.7098 42.7611 31.8845 42.0028 32.1743C41.5233 32.3575 41.1156 32.7283 40.6762 33.0181C39.5673 33.7532 38.4583 34.4883 37.3536 35.2319C37.0283 35.4514 36.7199 35.6964 36.401 35.9244C35.4314 36.6148 34.4598 37.3051 33.4881 37.9933C32.4637 38.7178 31.4477 39.4529 30.4105 40.1582C29.7283 40.6227 29.0143 41.0424 28.3173 41.4856C27.9666 41.7094 27.6223 41.9395 27.2717 42.1653C25.5269 43.2925 23.7505 44.3621 21.8685 45.2464C20.9032 45.7003 19.9484 46.1754 18.9852 46.6357C18.3917 46.919 17.7537 46.9766 17.1074 46.9894C16.3575 47.0064 15.6098 47 14.8831 46.7848C14.3023 46.6143 13.8756 46.2202 13.5503 45.7322C13.4341 45.5596 13.4151 45.3039 13.394 45.0823C13.3158 44.2663 13.2081 43.4544 13.5228 42.6512C13.6348 42.3678 13.6348 42.0396 13.6982 41.6625C13.4405 41.7371 13.2461 41.7776 13.0666 41.85C11.4359 42.5254 9.80522 43.1988 8.18088 43.8891C7.03391 44.3749 5.89961 44.8906 4.75264 45.3785C3.74297 45.8089 2.68472 46.022 1.59267 45.9346C1.12163 45.8963 0.661149 45.713 0.198559 45.5873C-0.0126695 45.5298 -0.0105572 45.3764 0.00422878 45.1825C0.0528113 44.4943 0.456257 44.0148 0.91251 43.5759C1.9074 42.6171 2.88538 41.6369 3.93096 40.7335C5.23424 39.6085 6.59033 38.5431 7.93585 37.4692C8.43646 37.0707 8.98777 36.7362 9.4926 36.342C10.272 35.7348 11.0325 35.0998 11.8056 34.4819C12.0759 34.2645 12.3569 34.06 12.642 33.864C13.3454 33.3824 14.0594 32.9136 14.7606 32.43C15.6753 31.7993 16.5814 31.16 17.4918 30.5229C18.1741 30.0435 18.85 29.5556 19.5365 29.0847C20.2082 28.6245 20.9158 28.2175 21.5559 27.7189C21.9572 27.4057 22.2571 26.9582 22.612 26.5811C22.8803 26.2955 23.1675 26.0271 23.4463 25.7501C23.5034 25.6947 23.5794 25.6435 23.6048 25.5754C23.7653 25.1151 24.1413 24.8317 24.4497 24.4908C24.701 24.2138 24.9228 23.9112 25.1657 23.63C25.5354 23.2038 25.9072 22.7777 26.2895 22.3622C27.0393 21.544 27.7892 20.7236 28.556 19.9204C29.2551 19.1874 29.9691 18.4672 30.6915 17.7598C31.0421 17.4189 31.4456 17.1333 31.7983 16.7945C32.0666 16.5367 32.2778 16.2192 32.5418 15.955C32.7805 15.7164 33.0657 15.5204 33.3128 15.2902C33.4649 15.1475 33.5726 14.9536 33.7311 14.8172C34.257 14.3634 34.7956 13.9266 35.33 13.4834C36.1834 12.776 37.0241 12.0558 37.8922 11.3675C38.5787 10.8221 39.2885 10.3043 40.0066 9.79931C40.37 9.54362 40.7523 9.27728 41.1663 9.14517C41.5233 9.03011 41.9478 9.0365 42.3217 9.10256C42.8561 9.19844 42.7949 9.24319 42.7864 9.82062C42.7737 10.7688 42.5012 11.6296 42.0281 12.4223C41.7873 12.8271 41.4155 13.151 41.1663 13.5516C40.5178 14.5956 39.7468 15.531 38.885 16.4046C38.3738 16.9245 37.9514 17.5318 37.455 18.139C37.586 18.0879 37.6874 18.0602 37.7782 18.0112C38.4731 17.6298 39.166 17.2441 39.8609 16.8606C40.7058 16.3961 41.5402 15.9082 42.402 15.4756C43.2638 15.0431 44.1573 14.6766 45.0254 14.2568C45.733 13.9138 46.4153 13.5217 47.1208 13.1744C48.1643 12.6588 49.2204 12.1666 50.266 11.6552C50.8638 11.3633 51.4383 11.0266 52.0445 10.756C53.1725 10.2532 54.3195 9.79718 55.4495 9.30072C56.3536 8.9044 57.2323 8.44415 58.1427 8.06914C59.4249 7.54072 60.7239 7.05278 62.023 6.56697C63.2164 6.12164 64.4056 5.65927 65.6202 5.28213C67.555 4.68126 69.5047 4.12513 71.4606 3.58818C72.0817 3.41772 72.7322 3.34315 73.3744 3.2771C73.9743 3.2153 74.5826 3.22383 75.1867 3.19826C75.2416 3.19613 75.2944 3.1876 75.3494 3.18121C75.248 3.04911 75.3916 3.06402 75.4191 3.08959C75.7507 3.40707 76.2112 3.3261 76.5998 3.47099C76.9547 3.6031 77.0751 3.83535 77.1131 4.15496C77.2208 5.05414 76.9462 5.81055 76.3548 6.50944C75.4909 7.53006 74.4474 8.34614 73.4694 9.23466C72.6414 9.98682 71.7965 10.7241 70.9262 11.4272C69.8046 12.337 68.6513 13.2064 67.5128 14.0928C66.9256 14.5487 66.3447 15.0154 65.7448 15.4564C65.0478 15.97 64.3275 16.4494 63.6325 16.9629C62.8531 17.5382 62.1011 18.1518 61.3154 18.7165C60.4916 19.3088 59.6382 19.8607 58.7996 20.4339C58.1385 20.8856 57.4816 21.3416 56.8225 21.7975C55.9311 22.4155 55.0376 23.0291 54.1505 23.6534C53.4577 24.1392 52.7796 24.6485 52.0805 25.1236C51.0856 25.8012 50.0738 26.4511 49.0768 27.1265C48.5191 27.5037 47.9805 27.9107 47.4292 28.2963C47.1736 28.4753 46.9075 28.6415 46.6455 28.812C46.6603 28.846 46.673 28.8801 46.6878 28.9121V28.9185ZM16.3427 38.5985C16.3702 38.624 16.3955 38.6496 16.423 38.6731C16.8729 38.4962 17.3228 38.3108 17.7749 38.1425C19.5238 37.4926 21.2749 36.8449 23.026 36.1993C24.4095 35.69 25.7889 35.1658 27.1809 34.68C28.3088 34.288 29.4537 33.9471 30.588 33.5763C32.2018 33.0479 33.8029 32.4768 35.4272 31.9846C37.2332 31.437 39.0625 30.964 40.8748 30.4377C41.2275 30.3354 41.5697 30.165 41.8845 29.9711C42.2309 29.758 42.5372 29.4767 42.8709 29.2402C43.6039 28.7182 44.3453 28.2068 45.0803 27.6891C45.8154 27.1713 46.5484 26.6493 47.2856 26.1357C47.5686 25.9376 47.8664 25.7629 48.1474 25.5626C48.5994 25.2408 49.0409 24.8999 49.4929 24.5782C49.9111 24.282 50.342 24.0007 50.7624 23.7088C51.2693 23.3551 51.7699 22.9886 52.279 22.6413C52.4712 22.5092 52.6994 22.4261 52.8895 22.2919C53.445 21.8998 53.9836 21.4843 54.5434 21.0987C55.0503 20.7492 55.5805 20.4317 56.0917 20.0887C56.4846 19.8245 56.8584 19.5347 57.2492 19.2705C57.8618 18.855 58.487 18.4587 59.0953 18.0368C59.5326 17.7342 59.9846 17.4423 60.369 17.0801C60.9309 16.5495 61.7357 16.3577 62.2025 15.7057C62.2089 15.6972 62.2236 15.6951 62.2321 15.6887C62.9355 15.2285 63.6494 14.7831 64.338 14.3037C64.9421 13.8818 65.523 13.4237 66.1102 12.9763C66.8221 12.4329 67.5339 11.8874 68.2373 11.3334C68.9428 10.7773 69.6377 10.2105 70.3369 9.6459C70.9917 9.11747 71.655 8.5997 72.2929 8.04997C72.9921 7.44483 73.6785 6.82266 74.3397 6.17704C74.7537 5.77433 75.1128 5.31409 75.4951 4.87942C75.4761 4.83467 75.455 4.79206 75.436 4.74731C75.1994 4.71109 74.9628 4.65782 74.7241 4.6429C73.6067 4.58111 72.5337 4.8645 71.4606 5.10741C69.4117 5.57191 67.4241 6.24309 65.4449 6.93985C63.5311 7.61316 61.6111 8.26943 59.7248 9.0152C58.1195 9.65016 56.5606 10.4002 54.9827 11.1055C53.652 11.7021 52.3191 12.2965 50.9968 12.9166C49.3915 13.6687 47.7904 14.4273 46.202 15.2114C44.7234 15.9423 43.2596 16.7029 41.7957 17.4636C40.7502 18.0069 39.7067 18.5545 38.6801 19.1298C37.3177 19.8927 35.9658 20.6768 34.6161 21.4673C34.0141 21.8188 33.4015 22.1555 32.9558 22.7351C32.5207 23.2997 32.0391 23.8324 31.5512 24.3502C30.8605 25.081 30.1465 25.7884 29.4368 26.5001C28.199 27.7466 26.9612 28.9931 25.7128 30.2289C25.1425 30.7936 24.5511 31.3369 23.9681 31.8888C23.1295 32.6835 22.3015 33.4889 21.4481 34.2688C20.7997 34.8611 20.1364 35.4428 19.452 35.9904C18.6134 36.6595 17.7368 37.2774 16.894 37.9422C16.6744 38.1148 16.5244 38.379 16.3427 38.6006V38.5985ZM36.2489 33.8533C36.2362 33.832 36.2235 33.8086 36.2109 33.7873C36.1581 33.7936 36.1031 33.7936 36.0524 33.8086C35.178 34.0834 34.3014 34.354 33.4269 34.6353C31.5892 35.2276 29.7473 35.8029 27.9202 36.4251C25.8501 37.1304 23.7928 37.874 21.7354 38.6177C19.6886 39.3592 17.6502 40.1198 15.6098 40.8826C15.502 40.9231 15.3795 41.036 15.3479 41.1426C15.2465 41.4856 15.1768 41.8415 15.1049 42.193C14.9529 42.9388 14.767 43.6782 14.936 44.4516C14.9888 44.6903 15.3669 45.338 15.538 45.3913C16.1949 45.5916 16.856 45.5873 17.5214 45.4062C17.4031 45.3977 17.2869 45.3892 17.1686 45.3806C17.6629 45.3274 18.153 45.2528 18.5923 45.061C19.3042 44.7521 19.9843 44.3685 20.6771 44.017C21.5115 43.5908 22.3458 43.1668 23.176 42.7364C23.364 42.6384 23.5308 42.4999 23.7167 42.4019C23.9026 42.3038 24.118 42.257 24.2891 42.1398C25.0791 41.605 25.8522 41.0424 26.6422 40.5098C27.4322 39.9771 28.2391 39.4742 29.0312 38.9458C29.9311 38.3449 30.8309 37.7462 31.7117 37.1197C32.3686 36.6531 33.1523 36.3569 33.6381 35.6602C33.6677 35.6176 33.7374 35.609 33.7839 35.5771C34.3415 35.1957 34.9013 34.8164 35.4547 34.4307C35.7208 34.2454 35.9806 34.0472 36.2426 33.8554L36.2489 33.8533ZM18.8078 31.5137C18.7888 31.4924 18.7719 31.4711 18.7529 31.4498C17.8826 32.0507 17.0081 32.6409 16.1463 33.2524C14.9698 34.0877 13.7974 34.9315 12.6357 35.788C11.7211 36.4613 10.817 37.1496 9.92351 37.8506C9.03424 38.5473 8.1851 39.2974 7.28104 39.9749C5.73697 41.1319 4.31751 42.4317 2.94241 43.7826C2.78822 43.9339 2.53052 44.066 2.59178 44.3941C3.05014 44.2322 3.49372 44.1043 3.91195 43.9232C5.43702 43.2605 6.9473 42.5638 8.47237 41.9054C9.83691 41.3173 11.2141 40.7569 12.5934 40.1987C13.1701 39.9664 13.7151 39.6638 14.1755 39.2654C14.5051 38.9799 14.7395 38.5601 14.9507 38.1638C15.3162 37.4841 15.5992 36.7596 15.971 36.0863C16.4357 35.2447 16.949 34.4307 17.4559 33.6147C17.8953 32.9094 18.3536 32.2148 18.8035 31.5159L18.8078 31.5137ZM26.0107 24.7486C26.0318 24.7742 26.055 24.8019 26.0761 24.8275C26.7647 24.412 27.4512 23.9986 28.1398 23.5831C29.1495 22.9737 30.1719 22.3856 31.1667 21.7507C31.7054 21.4076 32.2165 21.0134 32.7024 20.5979C33.2241 20.1505 33.7015 19.6519 34.2 19.1746C34.4725 18.9125 34.764 18.6696 35.0174 18.3905C35.3089 18.0687 35.5561 17.7044 35.8433 17.3784C36.1158 17.0673 36.4327 16.8031 36.6587 16.443C36.8805 16.0893 37.1551 15.7697 37.4191 15.4458C38.0824 14.6276 38.7688 13.8286 39.4131 12.9997C39.8355 12.4563 40.2052 11.8704 40.6403 11.2418C35.1167 15.1027 30.4781 19.8309 26.0128 24.7508L26.0107 24.7486ZM28.5538 25.0895C28.5412 25.0725 28.5285 25.0555 28.5158 25.0405C28.4799 25.0576 28.4419 25.0682 28.4081 25.0895C26.9358 26.0313 25.4615 26.9667 23.9955 27.917C23.3513 28.3347 22.6754 28.7076 22.1959 29.3425C21.8748 29.7665 21.5199 30.1671 21.2094 30.5975C20.7109 31.2836 20.223 31.9804 19.752 32.6857C19.2154 33.4911 18.6979 34.3093 18.1783 35.1275C18.079 35.2852 18.0072 35.4641 17.9248 35.6325C18.041 35.6325 18.1002 35.6005 18.1487 35.5558C18.9768 34.7738 19.8111 33.9982 20.6264 33.2056C21.3953 32.4577 22.1473 31.6906 22.9056 30.9299C23.7547 30.0776 24.6018 29.2211 25.453 28.3709C26.1015 27.721 26.7542 27.0754 27.409 26.4319C27.5484 26.2955 27.7279 26.1954 27.8526 26.0462C27.9645 25.9141 28.011 25.7288 28.1166 25.5903C28.2476 25.4134 28.4081 25.2579 28.556 25.0917L28.5538 25.0895Z"
                    fill="currentColor"/>
                <path
                    d="M128.104 13.428C128.059 13.5111 128.017 13.5878 127.956 13.7007C127.829 13.607 127.719 13.526 127.605 13.4429C127.48 13.6496 127.326 13.7518 127.054 13.7241C126.845 13.7028 126.614 13.7902 126.405 13.8648C126.181 13.9436 125.974 14.0672 125.755 14.1567C125.653 14.1972 125.537 14.2249 125.427 14.2206C125.159 14.21 124.891 14.1524 124.625 14.1652C124.394 14.1759 124.168 14.2568 123.938 14.308C123.947 14.3421 123.959 14.3996 123.978 14.4784C123.051 14.1098 122.305 14.7597 121.435 14.8982C121.49 14.8108 121.513 14.7767 121.549 14.7171H121.196C121.213 14.7831 121.228 14.8428 121.256 14.9451H120.206C120.206 14.96 120.206 14.977 120.206 14.9919C120.276 15.0047 120.345 15.0175 120.415 15.0303C120.415 15.0601 120.415 15.0878 120.415 15.1177H119.164C119.171 15.1773 119.177 15.2455 119.186 15.3137C119.129 15.2817 119.074 15.2284 119.012 15.2199C118.888 15.2007 118.757 15.188 118.634 15.2093C118.59 15.2178 118.562 15.3307 118.503 15.4458C118.358 15.4223 118.125 15.7377 117.92 15.3563C117.88 15.4479 117.848 15.5225 117.817 15.5949C117.802 15.5992 117.785 15.6077 117.779 15.6035C117.295 15.1965 116.86 15.612 116.412 15.6972C115.117 15.9444 113.829 16.2235 112.538 16.4877C112.268 16.5431 111.993 16.5879 111.723 16.6497C111.501 16.7008 111.218 16.6433 111.117 16.9629C111.112 16.9778 110.865 17.1845 110.641 16.9799C110.513 16.8627 110.17 16.9501 109.932 16.9927C109.566 17.0609 109.209 17.1717 108.865 17.2612V17.5062C108.799 17.4892 108.734 17.4679 108.669 17.4551C108.533 17.4295 108.396 17.3912 108.261 17.3933C108.045 17.3975 107.832 17.4274 107.619 17.4551C107.477 17.4743 107.334 17.4977 107.196 17.536C106.404 17.764 105.614 18.0048 104.82 18.2264C104.315 18.367 103.802 18.4778 103.295 18.6099C102.129 18.9104 100.967 19.2236 99.799 19.5176C99.0027 19.7179 98.2 19.8799 97.4037 20.078C96.8503 20.2144 96.3117 20.4488 95.7519 20.5148C95.0126 20.6043 94.343 20.9815 93.6143 21.0156C93.0608 21.0411 92.6194 21.3693 92.0892 21.4055C91.7639 21.4268 91.4323 21.4161 91.1112 21.4673C90.8493 21.5078 90.5895 21.5994 90.3423 21.6995C89.7572 21.9403 89.1489 21.6292 88.5553 21.7933C88.2448 21.8785 87.8456 21.7549 87.5943 21.9062C87.2922 22.0873 87.119 21.9957 86.8697 21.8849C86.781 21.8465 86.6353 21.9552 86.5128 21.9787C86.4621 21.9893 86.3987 21.9595 86.348 21.936C86.3121 21.9211 86.2783 21.8551 86.2593 21.8615C85.8411 21.9893 85.4968 21.6846 85.1567 21.5738C84.8589 21.4758 84.6941 20.9538 84.4786 20.6128C84.4385 20.5511 84.4639 20.4466 84.4258 20.3827C83.8957 19.5219 84.5019 18.8678 84.8483 18.1881C85.0299 17.8322 85.3468 17.5488 85.651 17.1717C85.463 17.259 85.3341 17.3145 85.2074 17.3762C83.9168 18.0069 82.6241 18.6334 81.3377 19.2705C80.0492 19.9076 78.7459 20.5191 77.487 21.2095C76.6928 21.6441 75.8669 21.9978 75.0515 22.3792C74.5678 22.6051 74.0524 22.767 73.5434 22.9396C73.1441 23.0739 72.6837 22.7564 72.5907 22.2194C72.257 22.3686 71.9211 22.4794 71.6317 22.6605C71.4374 22.7819 71.1522 22.7905 71.0635 23.1229C71.034 23.2273 70.6073 23.1974 70.3792 23.2763C69.5702 23.5597 68.7759 23.9496 67.9036 23.8857C67.5107 23.858 67.046 23.8388 66.7249 23.4787C66.2961 23.6875 65.8483 23.9134 65.3942 24.1264C65.1069 24.2607 64.8112 24.38 64.5197 24.5036C64.5091 24.5078 64.4922 24.5164 64.488 24.5121C64.2641 24.3289 64.0148 24.4248 63.7677 24.4354C63.6536 24.4397 63.5354 24.3779 63.4297 24.3502C63.3495 24.184 63.284 23.9879 63.172 23.8281C62.9672 23.5405 63.0749 23.2997 63.2291 23.044C63.5755 22.4751 64.0106 21.9936 64.5281 21.5781C65.0731 21.1434 65.5589 20.6128 66.1483 20.257C67.253 19.588 68.3873 18.9509 69.6673 18.6611C69.7265 18.6483 69.7877 18.6376 69.8595 18.6867L69.5976 18.7335C69.868 18.8656 70.113 18.8315 70.3623 18.6547C71.1691 18.0794 71.9655 17.4849 72.8019 16.9565C73.8306 16.3087 74.8783 15.6866 75.9535 15.124C76.3126 14.9365 76.7836 14.9536 77.2061 14.9195C77.2842 14.9131 77.3771 15.1155 77.4722 15.2327C77.375 15.2732 77.3159 15.2945 77.2103 15.3371C77.4363 15.5459 77.6412 15.7718 77.3877 16.0488C77.2039 16.2491 76.9885 16.4281 76.7688 16.5857C76.6083 16.7008 76.3907 16.7413 76.2386 16.867C75.5479 17.4338 74.6861 17.7214 74.0165 18.3393C73.5349 18.7847 72.9181 19.0787 72.3879 19.475C71.7374 19.9608 71.1227 20.4957 70.47 20.9793C70.0349 21.3032 69.5617 21.5781 69.1054 21.8764C69.0421 21.919 68.9872 21.9744 68.9301 22.0255L68.9745 22.1257C69.2808 21.9978 69.5934 21.8849 69.8891 21.7357C71.0361 21.1604 72.1936 20.6001 73.3152 19.9779C74.1116 19.5368 74.8741 19.0297 75.6218 18.5098C76.9526 17.5808 78.3805 16.8329 79.8253 16.1106C80.799 15.6226 81.7369 15.0559 82.7212 14.5914C84.1428 13.9223 85.5813 13.2895 87.0345 12.6907C87.4274 12.5288 87.89 12.5331 88.3251 12.5011C88.3843 12.4968 88.5385 12.7994 88.5131 12.8271C88.3124 13.0402 88.5131 13.0572 88.6293 13.1211C88.492 13.3236 88.3568 13.5239 88.2089 13.7433C88.2955 13.7284 88.3568 13.7178 88.4202 13.7071C88.4392 13.7327 88.4582 13.7582 88.4772 13.7817C88.3927 13.8307 88.3061 13.8797 88.2216 13.9287C88.2385 13.9521 88.2533 13.9734 88.2702 13.9969C88.7222 13.7412 89.1552 13.4386 89.6284 13.2383C90.6909 12.7909 91.4745 11.9514 92.4018 11.3143C93.4136 10.6196 94.4359 9.93781 95.4562 9.2581C95.8596 8.98962 96.2736 8.73607 96.6834 8.47398C96.6327 8.41645 96.5862 8.36318 96.5968 8.37384C96.0962 8.48677 95.6378 8.59757 95.1752 8.68919C94.8331 8.75737 94.4866 8.80425 94.1402 8.84473C93.9649 8.86391 93.7833 8.83408 93.6079 8.85113C93.5087 8.86178 93.4178 8.93635 93.3185 8.95553C93.101 8.99815 92.8792 9.01732 92.6616 9.05781C92.4018 9.10895 92.1483 9.18352 91.8885 9.2304C91.5273 9.29219 91.1598 9.32628 90.7986 9.39234C90.3656 9.4733 89.9347 9.57558 89.5397 9.66081C89.5354 9.66081 89.5883 9.67572 89.7277 9.7226C89.2165 9.778 88.756 9.7503 88.3589 9.89732C88.0674 10.006 87.7886 10.1445 87.4802 10.1232C86.9395 10.0891 86.4853 10.3831 85.9805 10.4769C85.3426 10.5941 84.692 10.6452 84.0604 10.7837C83.0697 11.0032 82.0918 11.278 81.1074 11.5146C80.8878 11.5678 80.6512 11.5444 80.4294 11.5891C80.2541 11.6254 80.0957 11.7447 79.9203 11.7788C79.2592 11.9087 78.5938 12.0068 77.9348 12.1389C77.4173 12.2433 76.9061 12.386 76.3886 12.4968C76.302 12.516 76.1985 12.4436 76.1034 12.4393C75.9894 12.4329 75.8669 12.4308 75.7591 12.4627C75.493 12.5458 75.1825 12.793 74.9797 12.7206C74.4854 12.5437 74.0461 12.8228 73.5771 12.7653C73.3004 12.7312 73.0068 12.8527 72.7196 12.8782C72.5104 12.8974 72.2971 12.8868 72.088 12.8633C72.0415 12.8591 71.9591 12.7099 71.9739 12.6907C72.0669 12.565 72.164 12.4095 72.2992 12.3519C72.4788 12.2752 72.6963 12.2944 72.8907 12.2454C73.6764 12.0494 74.4601 11.847 75.2416 11.6381C76.2154 11.3761 77.1849 11.0991 78.1587 10.8412C78.5495 10.739 78.9529 10.6921 79.3416 10.5813C79.7851 10.4534 80.2161 10.2787 80.6554 10.1317C80.9004 10.0486 81.1433 9.84831 81.4074 10.0976C81.4264 10.1147 81.4834 10.1274 81.4919 10.1168C81.8108 9.71195 82.2798 9.93141 82.6663 9.81848C82.9156 9.74604 83.1458 9.60754 83.3908 9.50953C83.6443 9.40938 83.8957 9.27941 84.1808 9.42856C84.2167 9.44773 84.2822 9.40938 84.3329 9.39234C84.4977 9.33267 84.6603 9.26875 84.861 9.19204C84.861 9.20483 84.8567 9.13878 84.8525 9.05142C85.294 9.10895 85.7059 9.14304 86.0375 8.80425C86.0734 8.76803 86.1558 8.72328 86.1833 8.74033C86.517 8.94488 86.7324 8.52938 87.0852 8.58904C87.3978 8.64018 87.7569 8.38449 88.0991 8.27156C88.2913 8.20764 88.4603 8.16929 88.6948 8.21616C88.9229 8.26304 89.1975 8.0244 89.4657 7.95834C89.6896 7.90294 89.9283 7.91786 90.186 7.89868C90.2346 7.55989 90.6212 7.64938 90.8789 7.57907C91.5168 7.40861 92.1716 7.29355 92.82 7.16144C93.3228 7.05704 93.8255 6.96115 94.3282 6.85888C94.5035 6.82265 94.6767 6.78217 94.85 6.74169C94.9387 6.72038 95.0232 6.67776 95.1119 6.66924C96.0413 6.58401 96.9369 6.31341 97.8557 6.17278C98.8041 6.02789 99.7462 5.7999 100.699 5.7445C101.96 5.67205 102.976 5.04348 104.045 4.49588C105.266 3.87157 106.501 3.27283 107.726 2.65492C108.863 2.08174 109.984 1.47874 111.127 0.924749C111.757 0.620053 112.407 0.336663 113.077 0.136373C113.514 0.00426701 114 0.029836 114.465 0.00426701C114.549 5.51975e-06 114.67 0.0617972 114.72 0.132112C115.058 0.598745 114.948 1.34877 114.505 1.71952C113.966 2.16911 113.434 2.62935 112.887 3.06828C112.747 3.18121 112.561 3.23874 112.397 3.31971C112.367 3.33462 112.316 3.33462 112.304 3.35593C111.978 3.99942 111.121 3.70963 110.762 4.33394C110.846 4.35951 110.969 4.43622 111.087 4.42983C111.755 4.38721 112.422 4.33181 113.087 4.26576C113.58 4.21675 114.067 4.12087 114.56 4.08252C114.931 4.05482 115.31 4.09956 115.683 4.08678C115.808 4.08252 115.926 3.97598 116.055 3.95254C116.237 3.91845 116.425 3.91419 116.611 3.9014C118.391 3.78634 120.17 3.6585 121.951 3.56261C123.224 3.49443 124.502 3.47099 125.778 3.41772C126.469 3.38789 127.155 3.30905 127.846 3.30053C128.729 3.28988 129.614 3.34102 130.497 3.33888C131.513 3.33675 132.531 3.30266 133.547 3.28775C134.02 3.28135 134.495 3.28775 135.002 3.28775C134.966 3.3261 134.941 3.3538 134.897 3.40068C134.956 3.41559 135.021 3.45181 135.049 3.43477C135.444 3.18334 135.873 3.26857 136.297 3.28562C136.432 3.28988 136.58 3.31758 136.701 3.27496C136.916 3.19826 137.058 3.28988 137.214 3.4092C137.262 3.44755 137.347 3.43477 137.417 3.44542C137.461 3.12368 137.717 3.22169 137.896 3.22596C138.093 3.22809 138.287 3.31119 138.485 3.32823C138.633 3.34102 138.809 3.25152 138.931 3.30266C139.25 3.43903 139.556 3.61162 139.852 3.79913C140.025 3.90779 140.03 4.05695 139.789 4.1507C139.877 4.21462 139.932 4.25724 140.021 4.32116C139.732 4.4554 139.474 4.57472 139.216 4.69404C139.225 4.70043 139.235 4.70682 139.244 4.71109C139.054 4.75796 138.864 4.80484 138.673 4.84958C138.673 4.87302 138.673 4.89646 138.673 4.92203C138.887 4.94547 139.102 4.96891 139.373 4.99874C138.302 5.42702 137.241 5.3013 136.198 5.34818C135.773 5.36736 135.349 5.35244 134.947 5.35244C134.941 5.3567 134.969 5.33539 135.045 5.27573C134.753 5.32687 134.512 5.37375 134.269 5.4121C134.105 5.43767 133.938 5.4675 133.771 5.47176C132.381 5.49946 130.989 5.49946 129.599 5.5506C127.789 5.61665 125.981 5.72532 124.173 5.81268C123.112 5.86382 122.05 5.89791 120.989 5.9597C119.669 6.03641 118.351 6.13655 117.033 6.22391C116.29 6.27292 115.544 6.30701 114.8 6.36881C113.596 6.47108 112.395 6.5904 111.193 6.70333C110.183 6.79709 109.171 6.88871 108.164 6.99098C107.078 7.10178 105.994 7.21684 104.911 7.34895C104.704 7.37452 104.507 7.48532 104.292 7.56202C104.317 7.52367 104.343 7.48532 104.368 7.44483C104.353 7.41713 104.338 7.3873 104.326 7.3596C103.654 7.72183 102.982 8.08193 102.311 8.44415C102.317 8.45907 102.323 8.47611 102.33 8.49103C102.391 8.47611 102.45 8.4612 102.511 8.44841C102.52 8.46546 102.53 8.48038 102.539 8.49742L101.932 8.83834C101.909 8.81277 101.886 8.7872 101.863 8.76163C101.947 8.72541 102.034 8.68919 102.144 8.64231C102.063 8.5997 102.042 8.58052 102.034 8.58478C101.375 8.92144 100.716 9.26236 100.057 9.60115C99.8877 9.68851 99.7082 9.76522 99.5561 9.87601C99.423 9.9719 99.3322 10.1296 99.197 10.2255C98.9288 10.413 98.6457 10.577 98.3648 10.7432C98.2993 10.7816 98.2169 10.788 98.1451 10.8157C98.0226 10.8668 97.8726 10.8945 97.786 10.984C97.6508 11.1225 97.5727 11.2525 97.3192 11.2077C97.184 11.1843 96.9981 11.4016 96.8524 11.5295C96.5841 11.7681 96.3518 12.0132 95.9336 12.0302C95.678 12.0387 95.4266 12.2475 95.1774 12.3754C94.4866 12.7291 93.7938 13.0764 93.1137 13.4471C92.7208 13.6602 92.3532 13.918 91.9667 14.1439C91.8463 14.2142 91.6836 14.2206 91.5696 14.2994C91.088 14.634 90.5916 14.9557 90.1459 15.335C89.3306 16.0275 88.5448 16.7519 87.7548 17.4721C87.6597 17.5595 87.6175 17.7044 87.5351 17.8109C87.4042 17.9771 87.2542 18.1284 87.1211 18.2946C86.8338 18.6504 86.5339 18.9999 86.2741 19.3749C86.1326 19.5773 86.2783 19.8777 86.5254 19.8948C87.1486 19.9395 87.7738 19.9608 88.399 19.9651C88.8004 19.9672 89.2038 19.9417 89.6009 19.8905C90.1079 19.8245 90.6106 19.7222 91.1133 19.6327C91.7618 19.5155 92.4124 19.4175 93.0524 19.2683C93.6248 19.1362 94.1846 18.9466 94.7528 18.7847C95.3569 18.6121 95.9547 18.3692 96.5715 18.301C96.9306 18.2605 97.222 18.1135 97.5495 18.0304C97.8346 17.9579 98.1367 17.9579 98.4239 17.8919C98.6014 17.8514 98.7619 17.7406 98.933 17.6703C99.0513 17.6213 99.1484 17.519 99.3048 17.6703C99.366 17.7278 99.6174 17.6128 99.7652 17.5382C100.012 17.4146 100.232 17.2122 100.54 17.3485C100.566 17.3592 100.606 17.34 100.638 17.3294C101.149 17.1653 101.658 16.9863 102.173 16.8372C102.917 16.6198 103.656 16.3514 104.416 16.2363C105.111 16.134 105.779 15.9976 106.436 15.7484C106.778 15.6184 107.177 15.6482 107.541 15.563C107.895 15.4799 108.233 15.3201 108.588 15.2348C108.99 15.139 109.406 15.1134 109.805 15.0154C110.407 14.8684 110.998 14.6766 111.598 14.5168C111.883 14.4422 112.175 14.3996 112.462 14.3378C112.781 14.2675 113.096 14.1737 113.417 14.1162C113.987 14.0118 114.56 13.9308 115.132 13.8328C115.272 13.8094 115.407 13.7604 115.546 13.7284C116.237 13.5665 116.925 13.4067 117.616 13.2469C118.444 13.0551 119.27 12.8527 120.102 12.6758C120.683 12.5522 121.273 12.4691 121.858 12.3647C122.508 12.2475 123.155 12.1048 123.807 12.0046C124.397 11.913 124.994 11.8832 125.584 11.7894C125.89 11.7425 126.177 11.5849 126.483 11.5359C127.073 11.4421 127.673 11.408 128.262 11.3143C129.079 11.1843 129.895 11.0309 130.708 10.8668C131.591 10.6878 132.47 10.4875 133.351 10.2894C133.507 10.2553 133.653 10.1701 133.807 10.136C134.271 10.0273 134.743 9.94207 135.207 9.82701C135.38 9.78439 135.541 9.69064 135.706 9.61819C135.756 9.59689 135.83 9.53723 135.856 9.55427C136.215 9.79078 136.53 9.4456 136.861 9.48183C137.077 9.50526 137.29 9.63098 137.484 9.74604C137.52 9.76735 137.463 9.94846 137.406 10.0571C137.406 10.4215 137.676 10.2318 137.871 10.2489C137.746 10.479 137.632 10.6878 137.474 10.9797C137.516 11.1417 137.265 11.4549 136.88 11.5082C136.542 11.555 136.276 11.7042 135.999 11.896C135.807 12.0302 135.533 12.0451 135.292 12.1026C134.495 12.2923 133.697 12.4819 132.899 12.6652C132.567 12.7419 132.233 12.8079 131.899 12.8676C131.701 12.9017 131.49 13.0551 131.295 12.842C131.293 12.8399 131.207 12.94 131.15 12.9571C130.987 13.0061 130.729 13.1233 130.67 13.0615C130.459 12.8356 130.284 13.0295 130.148 13.087C129.686 13.2873 129.221 13.445 128.712 13.4365C128.52 13.4322 128.33 13.4365 128.129 13.4365L128.104 13.428ZM65.447 22.4602C66.4123 21.8679 67.4621 21.3842 68.1401 20.3614C66.9953 20.7876 66.2116 21.6143 65.447 22.4602Z"
                    fill="currentColor"/>
                <path
                    d="M79.8422 23.3509C79.2972 23.3892 78.7523 23.4297 78.2073 23.468L78.2031 23.402L79.8274 23.255C79.8316 23.2869 79.838 23.3189 79.8422 23.3509Z"
                    fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_16_2">
                    <rect width="140" height="47" fill="currentColor"/>
                </clipPath>
            </defs>
        </svg>

    )
}
