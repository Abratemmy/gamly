import React, { useState } from 'react'
import SIDEBAR from '../../Common/Sidebar/SIDEBAR';


function HostSidebar({ name, children, defaultToggleState }) {
    const [panelSelected, setPanelSelected] = useState("creator")
    const sidebarData = [
        {
            link: "host_dashboard",
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.91667 6.25V0.75H17.25V6.25H9.91667ZM0.75 9.91667V0.75H8.08333V9.91667H0.75ZM9.91667 17.25V8.08333H17.25V17.25H9.91667ZM0.75 17.25V11.75H8.08333V17.25H0.75ZM2.58333 8.08333H6.25V2.58333H2.58333V8.08333ZM11.75 15.4167H15.4167V9.91667H11.75V15.4167ZM11.75 4.41667H15.4167V2.58333H11.75V4.41667ZM2.58333 15.4167H6.25V13.5833H2.58333V15.4167Z" fill="#2D3657" />
            </svg>,
            text: "Home"
        },
        {
            link: "code_management",
            icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_391_11344)">
                    <path d="M8.97111 9.0508C8.15379 9.0508 7.35484 8.80836 6.67535 8.35415C5.99586 7.89995 5.46637 7.2544 5.15387 6.49918C4.84138 5.74396 4.75993 4.91302 4.91982 4.1115C5.07972 3.30997 5.47378 2.57389 6.05214 1.99639C6.63049 1.41889 7.36716 1.02592 8.16892 0.867211C8.97068 0.708501 9.8015 0.791184 10.5563 1.10479C11.311 1.41841 11.9558 1.94885 12.409 2.62901C12.8622 3.30917 13.1034 4.10848 13.1022 4.9258C13.099 6.01988 12.6625 7.06814 11.8883 7.8412C11.1141 8.61427 10.0652 9.04919 8.97111 9.0508ZM8.97111 2.01691C8.39578 2.01691 7.83338 2.18751 7.35501 2.50715C6.87665 2.82678 6.50381 3.28108 6.28364 3.81261C6.06347 4.34414 6.00587 4.92903 6.11811 5.49329C6.23035 6.05756 6.50739 6.57588 6.91421 6.98269C7.32103 7.38951 7.83934 7.66655 8.40361 7.77879C8.96788 7.89103 9.55276 7.83343 10.0843 7.61326C10.6158 7.39309 11.0701 7.02025 11.3898 6.54189C11.7094 6.06353 11.88 5.50112 11.88 4.9258C11.88 4.15431 11.5735 3.41443 11.028 2.8689C10.4825 2.32338 9.74259 2.01691 8.97111 2.01691Z" fill="#2D3657" />
                    <path d="M10.0345 19.3598C9.90089 19.2262 9.79786 19.0652 9.73246 18.888C9.66705 18.7108 9.64081 18.5215 9.65556 18.3331H2.44445V14.8009C3.31095 13.8763 4.36194 13.144 5.5294 12.6513C6.69685 12.1586 7.95475 11.9166 9.22167 11.9409H9.66167C9.63362 11.736 9.65322 11.5274 9.71893 11.3313C9.78465 11.1352 9.89471 10.9569 10.0406 10.8103L10.1139 10.7431C9.82667 10.7431 9.50278 10.7064 9.22167 10.7064C7.73081 10.6711 6.25071 10.9674 4.88839 11.574C3.52607 12.1807 2.31558 13.0825 1.34445 14.2142C1.26512 14.32 1.22223 14.4487 1.22223 14.5809V18.3331C1.22223 18.6573 1.351 18.9681 1.58021 19.1974C1.80942 19.4266 2.1203 19.5553 2.44445 19.5553H10.2056L10.0345 19.3598Z" fill="#2D3657" />
                    <path d="M16.4206 9.95489C16.4508 9.94863 16.482 9.94863 16.5122 9.95489C16.4819 9.94939 16.4509 9.94939 16.4206 9.95489Z" fill="#2D3657" />
                    <path d="M20.5822 14.2511L19.36 13.8783C19.2726 13.5793 19.1538 13.2905 19.0056 13.0166L19.6167 11.88C19.6366 11.8345 19.6413 11.7838 19.6303 11.7355C19.6194 11.6871 19.5931 11.6435 19.5556 11.6111L18.6695 10.725C18.6359 10.6887 18.5912 10.6647 18.5424 10.657C18.4936 10.6492 18.4437 10.6581 18.4006 10.6822L17.2761 11.2933C16.9992 11.1376 16.7062 11.0126 16.4022 10.9205L16.0295 9.69829C16.0136 9.6533 15.9836 9.61467 15.9439 9.58822C15.9043 9.56177 15.8571 9.54892 15.8095 9.55162H14.5567C14.5086 9.55107 14.4616 9.56631 14.4229 9.595C14.3843 9.6237 14.3561 9.66428 14.3428 9.71051L13.97 10.9327C13.6639 11.0218 13.3688 11.1448 13.09 11.2994L11.9778 10.6883C11.9356 10.6647 11.8867 10.656 11.8389 10.6638C11.7912 10.6716 11.7475 10.6953 11.715 10.7311L10.8106 11.6111C10.777 11.6464 10.7554 11.6913 10.7489 11.7396C10.7423 11.7879 10.751 11.837 10.7739 11.88L11.385 12.9922C11.2234 13.2676 11.0942 13.5609 11 13.8661L9.77778 14.2327C9.73155 14.2461 9.69098 14.2743 9.66228 14.3129C9.63358 14.3515 9.61834 14.3985 9.6189 14.4466V15.6994C9.62251 15.7435 9.63973 15.7855 9.66819 15.8194C9.69665 15.8533 9.73495 15.8776 9.77778 15.8888L11 16.2616C11.0903 16.5614 11.2133 16.8504 11.3667 17.1233L10.7556 18.2905C10.7322 18.3323 10.7232 18.3806 10.7298 18.4281C10.7364 18.4755 10.7584 18.5194 10.7922 18.5533L11.6783 19.4394C11.713 19.4739 11.7576 19.4966 11.8059 19.5043C11.8541 19.512 11.9036 19.5043 11.9472 19.4822L13.09 18.8711C13.362 19.0173 13.6488 19.1341 13.9456 19.2194L14.3122 20.4416C14.3273 20.4869 14.3559 20.5264 14.3941 20.5548C14.4324 20.5832 14.4785 20.5992 14.5261 20.6005H15.7789C15.8268 20.6001 15.8733 20.5845 15.9117 20.5559C15.9502 20.5274 15.9786 20.4873 15.9928 20.4416L16.3656 19.1888C16.6584 19.1035 16.9412 18.9867 17.2089 18.8405L18.3639 19.4516C18.4064 19.4742 18.455 19.4822 18.5025 19.4745C18.5499 19.4668 18.5936 19.4437 18.6267 19.4088L19.5556 18.5777C19.5805 18.5419 19.5939 18.4992 19.5939 18.4555C19.5939 18.4118 19.5805 18.3692 19.5556 18.3333L18.9445 17.1844C19.0928 16.9148 19.2116 16.63 19.2989 16.335L20.5211 15.9622C20.5674 15.9488 20.6079 15.9207 20.6366 15.882C20.6653 15.8434 20.6806 15.7964 20.68 15.7483V14.465C20.6856 14.4237 20.6794 14.3817 20.6621 14.3439C20.6448 14.306 20.6171 14.2738 20.5822 14.2511ZM15.1861 17.1111C14.7819 17.1123 14.3864 16.9934 14.0498 16.7696C13.7133 16.5458 13.4507 16.2271 13.2954 15.8539C13.1402 15.4807 13.0993 15.0698 13.1778 14.6733C13.2564 14.2768 13.4509 13.9125 13.7367 13.6267C14.0226 13.3409 14.3868 13.1463 14.7833 13.0678C15.1798 12.9892 15.5907 13.0302 15.9639 13.1854C16.3371 13.3406 16.6559 13.6032 16.8797 13.9398C17.1035 14.2764 17.2223 14.6719 17.2211 15.0761C17.2195 15.6153 17.0046 16.132 16.6233 16.5132C16.242 16.8945 15.7253 17.1095 15.1861 17.1111Z" fill="#2D3657" />
                </g>
                <defs>
                    <clipPath id="clip0_391_11344">
                        <rect width="22" height="22" fill="white" />
                    </clipPath>
                </defs>
            </svg>,
            text: "Code Management "
        },
        {
            link: "creators",
            link2: "creators/:id",
            icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9167 10.083C12.4606 10.083 12.9923 9.92172 13.4445 9.61955C13.8967 9.31738 14.2492 8.88788 14.4573 8.38539C14.6655 7.88289 14.7199 7.32996 14.6138 6.79651C14.5077 6.26306 14.2458 5.77306 13.8612 5.38847C13.4766 5.00387 12.9866 4.74196 12.4532 4.63585C11.9197 4.52974 11.3668 4.5842 10.8643 4.79234C10.3618 5.00048 9.9323 5.35296 9.63013 5.80519C9.32795 6.25743 9.16667 6.78911 9.16667 7.33301C9.16667 8.06235 9.4564 8.76183 9.97212 9.27755C10.4878 9.79328 11.1873 10.083 11.9167 10.083ZM11.9167 6.41634C12.098 6.41634 12.2752 6.4701 12.4259 6.57083C12.5767 6.67155 12.6942 6.81472 12.7636 6.98222C12.8329 7.14971 12.8511 7.33403 12.8157 7.51184C12.7804 7.68966 12.693 7.85299 12.5648 7.98119C12.4367 8.10939 12.2733 8.19669 12.0955 8.23206C11.9177 8.26743 11.7334 8.24928 11.5659 8.1799C11.3984 8.11052 11.2552 7.99303 11.1545 7.84228C11.0538 7.69154 11 7.51431 11 7.33301C11 7.08989 11.0966 6.85674 11.2685 6.68483C11.4404 6.51292 11.6736 6.41634 11.9167 6.41634ZM15.6842 9.95467C16.2205 9.18562 16.508 8.27059 16.508 7.33301C16.508 6.39543 16.2205 5.4804 15.6842 4.71134C15.9478 4.62647 16.223 4.58317 16.5 4.58301C17.2293 4.58301 17.9288 4.87274 18.4445 5.38847C18.9603 5.90419 19.25 6.60366 19.25 7.33301C19.25 8.06235 18.9603 8.76183 18.4445 9.27755C17.9288 9.79328 17.2293 10.083 16.5 10.083C16.223 10.0828 15.9478 10.0395 15.6842 9.95467ZM11.9167 11.9163C6.41667 11.9163 6.41667 15.583 6.41667 15.583V17.4163H17.4167V15.583C17.4167 15.583 17.4167 11.9163 11.9167 11.9163ZM8.25 15.583C8.25 15.3172 8.54333 13.7497 11.9167 13.7497C15.125 13.7497 15.5283 15.1797 15.5833 15.583M22 15.583V17.4163H19.25V15.583C19.2286 14.9016 19.0716 14.2313 18.7883 13.6112C18.5051 12.9911 18.1011 12.4336 17.6 11.9713C22 12.4205 22 15.583 22 15.583ZM7.33333 10.9997H4.58333V13.7497H2.75V10.9997H0V9.16634H2.75V6.41634H4.58333V9.16634H7.33333V10.9997Z" fill="#2D3657" />
            </svg>,
            text: "Creators"
        },
        {
            link: "game_metrics",
            icon: <svg className='revenueSvg' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 14.6663V7.33301M11 14.6663V10.083M7.33337 14.6663V11.9163" stroke="#2D3657" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.75 18.7V3.3C2.75 3.15413 2.80795 3.01424 2.91109 2.91109C3.01424 2.80795 3.15413 2.75 3.3 2.75H18.7C18.8459 2.75 18.9858 2.80795 19.0889 2.91109C19.1921 3.01424 19.25 3.15413 19.25 3.3V18.7C19.25 18.8459 19.1921 18.9858 19.0889 19.0889C18.9858 19.1921 18.8459 19.25 18.7 19.25H3.3C3.15413 19.25 3.01424 19.1921 2.91109 19.0889C2.80795 18.9858 2.75 18.8459 2.75 18.7Z" stroke="#2D3657" stroke-width="1.5" />
            </svg>,
            text: "Game Metrics"
        },
        {
            link: "creator_kyc",
            icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3333 14.8925C18.3333 14.6217 18.2799 14.3536 18.1763 14.1034C18.0726 13.8532 17.9207 13.6259 17.7291 13.4345C17.5376 13.243 17.3102 13.0912 17.06 12.9876C16.8098 12.8841 16.5416 12.8308 16.2708 12.831H5.72913C5.45824 12.8308 5.18999 12.8841 4.9397 12.9877C4.68941 13.0913 4.46199 13.2432 4.27045 13.4348C4.07891 13.6263 3.92699 13.8537 3.82338 14.104C3.71977 14.3543 3.66651 14.6226 3.66663 14.8935V15.4224C3.66663 16.2409 3.95904 17.032 4.48979 17.6545C5.92621 19.3356 8.11338 20.1661 10.9963 20.1661C13.8801 20.1661 16.0682 19.3365 17.5065 17.6554C18.0399 17.0326 18.3332 16.2396 18.3333 15.4196V14.8925ZM5.72821 14.206H16.2708C16.6494 14.206 16.9565 14.513 16.9565 14.8935V15.4205C16.9566 15.9123 16.7811 16.3879 16.4615 16.7616C15.3092 18.1073 13.5061 18.7902 10.9954 18.7902C8.48554 18.7902 6.68338 18.1073 5.53479 16.7616C5.21594 16.3882 5.04074 15.9134 5.04071 15.4224V14.8925C5.04095 14.7105 5.11337 14.536 5.24207 14.4073C5.37078 14.2786 5.54619 14.2062 5.72821 14.206ZM15.5805 6.41887C15.5807 5.45358 15.276 4.51289 14.71 3.73094C14.1441 2.94898 13.3456 2.36569 12.4286 2.06422C11.5116 1.76275 10.5228 1.7585 9.60327 2.05207C8.68371 2.34565 7.88031 2.92206 7.30763 3.69912C7.2412 3.67808 7.17197 3.66726 7.10229 3.66703H4.81246C4.63012 3.66703 4.45525 3.73947 4.32632 3.8684C4.19739 3.99733 4.12496 4.1722 4.12496 4.35453V9.39437C4.12472 9.72556 4.18974 10.0536 4.31632 10.3596C4.4429 10.6657 4.62854 10.9438 4.86265 11.1781C5.09675 11.4123 5.37473 11.5982 5.68069 11.725C5.98665 11.8518 6.3146 11.917 6.64579 11.917H6.87496V11.9134H6.88413C7.03943 11.9136 7.19224 11.8743 7.32816 11.7992C7.46408 11.724 7.57863 11.6155 7.66102 11.4839C7.74342 11.3522 7.79094 11.2018 7.79911 11.0467C7.80728 10.8916 7.77584 10.737 7.70774 10.5974C7.63964 10.4578 7.53713 10.3379 7.40986 10.2489C7.28259 10.1598 7.13476 10.1047 6.98029 10.0886C6.82582 10.0725 6.66979 10.096 6.52692 10.1569C6.38404 10.2178 6.25902 10.3141 6.16363 10.4366C5.96512 10.3445 5.79713 10.1975 5.67952 10.013C5.56191 9.82846 5.4996 9.61411 5.49996 9.39528V9.16703H6.18563C6.53396 9.16703 6.85754 9.0552 7.12063 8.86637C7.65082 9.70692 8.43984 10.3524 9.3688 10.7055C10.2978 11.0585 11.3163 11.1001 12.271 10.8239C13.2256 10.5478 14.0646 9.96877 14.6616 9.17423C15.2585 8.3797 15.581 7.41266 15.5805 6.41887ZM6.41388 6.3217C6.41253 6.38647 6.41253 6.45126 6.41388 6.51603V7.56195C6.41388 7.62273 6.38973 7.68102 6.34675 7.724C6.30378 7.76697 6.24549 7.79112 6.18471 7.79112H5.49996V5.04295H6.41479L6.41388 6.3217ZM7.78888 6.50045V6.33729C7.81033 5.49372 8.16326 4.69257 8.77122 4.10738C9.37917 3.52218 10.1932 3.20006 11.037 3.21079C11.8807 3.22152 12.6863 3.56424 13.2792 4.1647C13.8721 4.76517 14.2045 5.57503 14.2045 6.41887C14.2045 7.2627 13.8721 8.07257 13.2792 8.67303C12.6863 9.2735 11.8807 9.61621 11.037 9.62694C10.1932 9.63767 9.37917 9.31555 8.77122 8.73036C8.16326 8.14516 7.81033 7.34402 7.78888 6.50045Z" fill="#2D3657" />
            </svg>,
            text: "KYC"
        },
        {
            link: "creator_withdrawal",
            icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2754 12.8333C16.9904 12.8333 17.6192 13.1972 17.9895 13.75H12.375C11.8589 13.75 11.3831 13.9205 11 14.2083H5.73187C5.64155 14.2082 5.5521 14.2259 5.46863 14.2604C5.38517 14.2949 5.30933 14.3455 5.24547 14.4094C5.1816 14.4733 5.13097 14.5491 5.09646 14.6326C5.06195 14.716 5.04425 14.8055 5.04437 14.8958V15.4247C5.04437 15.9151 5.22037 16.39 5.53937 16.7631C6.54312 17.9391 8.04554 18.6111 10.0833 18.7614V19.7083C10.0833 19.8559 10.097 20.0016 10.1245 20.141C7.67062 19.9861 5.77954 19.1638 4.49345 17.6568C3.96214 17.0345 3.67026 16.243 3.67029 15.4247V14.8949C3.67029 14.3481 3.88749 13.8238 4.27411 13.4371C4.66073 13.0505 5.18511 12.8333 5.73187 12.8333H16.2754ZM11 1.83789C11.6018 1.83789 12.1978 1.95644 12.7539 2.18678C13.31 2.41711 13.8153 2.75472 14.2409 3.18032C14.6665 3.60592 15.0041 4.11118 15.2344 4.66726C15.4647 5.22333 15.5833 5.81933 15.5833 6.42122C15.5833 7.02312 15.4647 7.61911 15.2344 8.17519C15.0041 8.73126 14.6665 9.23653 14.2409 9.66213C13.8153 10.0877 13.31 10.4253 12.7539 10.6557C12.1978 10.886 11.6018 11.0046 11 11.0046C9.78438 11.0046 8.61859 10.5217 7.75905 9.66213C6.89951 8.80259 6.41662 7.6368 6.41662 6.42122C6.41662 5.20565 6.89951 4.03986 7.75905 3.18032C8.61859 2.32078 9.78438 1.83789 11 1.83789ZM11 3.21289C10.5786 3.21289 10.1614 3.29588 9.77218 3.45711C9.38293 3.61834 9.02924 3.85467 8.73132 4.15259C8.4334 4.45051 8.19707 4.80419 8.03584 5.19345C7.87461 5.5827 7.79162 5.9999 7.79162 6.42122C7.79162 6.84255 7.87461 7.25975 8.03584 7.649C8.19707 8.03825 8.4334 8.39194 8.73132 8.68986C9.02924 8.98778 9.38293 9.2241 9.77218 9.38534C10.1614 9.54657 10.5786 9.62956 11 9.62956C11.8509 9.62956 12.6669 9.29154 13.2686 8.68986C13.8703 8.08818 14.2083 7.27213 14.2083 6.42122C14.2083 5.57032 13.8703 4.75427 13.2686 4.15259C12.6669 3.55091 11.8509 3.21289 11 3.21289ZM11 16.0416C11 15.677 11.1448 15.3272 11.4027 15.0694C11.6605 14.8115 12.0103 14.6666 12.375 14.6666H19.7083C20.073 14.6666 20.4227 14.8115 20.6806 15.0694C20.9384 15.3272 21.0833 15.677 21.0833 16.0416V19.7083C21.0833 20.073 20.9384 20.4227 20.6806 20.6806C20.4227 20.9384 20.073 21.0833 19.7083 21.0833H12.375C12.0103 21.0833 11.6605 20.9384 11.4027 20.6806C11.1448 20.4227 11 20.073 11 19.7083V16.0416ZM20.1666 16.5C19.9235 16.5 19.6903 16.4034 19.5184 16.2315C19.3465 16.0596 19.25 15.8264 19.25 15.5833H18.3333C18.3333 16.0695 18.5264 16.5359 18.8703 16.8797C19.2141 17.2235 19.6804 17.4166 20.1666 17.4166V16.5ZM20.1666 18.3333C19.6804 18.3333 19.2141 18.5265 18.8703 18.8703C18.5264 19.2141 18.3333 19.6804 18.3333 20.1666H19.25C19.25 19.9235 19.3465 19.6904 19.5184 19.5185C19.6903 19.3465 19.9235 19.25 20.1666 19.25V18.3333ZM12.8333 15.5833C12.8333 15.8264 12.7367 16.0596 12.5648 16.2315C12.3929 16.4034 12.1597 16.5 11.9166 16.5V17.4166C12.4029 17.4166 12.8692 17.2235 13.213 16.8797C13.5568 16.5359 13.75 16.0695 13.75 15.5833H12.8333ZM13.75 20.1666C13.75 19.6804 13.5568 19.2141 13.213 18.8703C12.8692 18.5265 12.4029 18.3333 11.9166 18.3333V19.25C12.1597 19.25 12.3929 19.3465 12.5648 19.5185C12.7367 19.6904 12.8333 19.9235 12.8333 20.1666H13.75ZM17.6458 17.875C17.6458 17.4495 17.4768 17.0415 17.1759 16.7407C16.8751 16.4398 16.4671 16.2708 16.0416 16.2708C15.6162 16.2708 15.2081 16.4398 14.9073 16.7407C14.6065 17.0415 14.4375 17.4495 14.4375 17.875C14.4375 18.3004 14.6065 18.7085 14.9073 19.0093C15.2081 19.3101 15.6162 19.4791 16.0416 19.4791C16.4671 19.4791 16.8751 19.3101 17.1759 19.0093C17.4768 18.7085 17.6458 18.3004 17.6458 17.875Z" fill="#2D3657" />
            </svg>,
            text: "Withdrawal Management"
        },
        {
            link: "contest",
            icon: <svg className='revenueSvg' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0883 10.692C19.2977 7.11783 18.1251 4.83791 16.2456 4.28232C15.8816 4.17614 15.5042 4.12317 15.125 4.12506C13.9696 4.12506 13.0578 4.81256 11 4.81256C8.94221 4.81256 8.0287 4.12506 6.87499 4.12506C6.47999 4.12301 6.08664 4.17594 5.70624 4.28232C3.82421 4.83791 2.66147 7.11998 1.86182 10.692C1.04542 14.3404 1.19323 17.2232 2.78909 17.7767C3.90628 18.1634 4.9053 17.3637 5.85147 16.1868C6.92569 14.8462 8.2487 14.4337 11 14.4337C13.7513 14.4337 15.0227 14.8462 16.0987 16.1868C17.044 17.3646 18.0799 18.1544 19.1675 17.7835C20.9301 17.1815 20.9051 14.3834 20.0883 10.692Z" stroke="#2D3657" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M12.5469 10.4844C13.0215 10.4844 13.4062 10.0996 13.4062 9.625C13.4062 9.15038 13.0215 8.76562 12.5469 8.76562C12.0723 8.76562 11.6875 9.15038 11.6875 9.625C11.6875 10.0996 12.0723 10.4844 12.5469 10.4844Z" fill="#2D3657" />
                <path d="M14.4375 12.375C14.2674 12.375 14.1012 12.3245 13.9598 12.23C13.8185 12.1355 13.7083 12.0012 13.6433 11.844C13.5784 11.6868 13.5615 11.5139 13.5948 11.3472C13.6281 11.1804 13.7102 11.0273 13.8306 10.9072C13.951 10.7871 14.1043 10.7054 14.2712 10.6725C14.438 10.6396 14.6109 10.6569 14.7679 10.7223C14.9249 10.7877 15.0589 10.8981 15.1531 11.0397C15.2473 11.1814 15.2973 11.3477 15.2969 11.5178C15.2963 11.7453 15.2055 11.9634 15.0444 12.1241C14.8833 12.2848 14.665 12.375 14.4375 12.375Z" fill="#2D3657" />
                <path d="M14.4375 8.59375C14.9121 8.59375 15.2969 8.20899 15.2969 7.73438C15.2969 7.25976 14.9121 6.875 14.4375 6.875C13.9629 6.875 13.5781 7.25976 13.5781 7.73438C13.5781 8.20899 13.9629 8.59375 14.4375 8.59375Z" fill="#2D3657" />
                <path d="M16.3281 10.4844C16.8027 10.4844 17.1875 10.0996 17.1875 9.625C17.1875 9.15038 16.8027 8.76562 16.3281 8.76562C15.8535 8.76562 15.4688 9.15038 15.4688 9.625C15.4688 10.0996 15.8535 10.4844 16.3281 10.4844Z" fill="#2D3657" />
                <path d="M6.875 7.5625V11.6875M8.9375 9.625H4.8125" stroke="#2D3657" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            text: "Contest"
        },
    ]
    return (
        <SIDEBAR sidebarData={sidebarData} name={name} setPanelSelected={setPanelSelected} panelSelected={panelSelected} defaultToggleState={defaultToggleState}>
            {children}
        </SIDEBAR>
    )
}

export default HostSidebar