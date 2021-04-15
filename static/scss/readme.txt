@media only screen and (min-width: 960px) {
    /* styles for browsers larger than 960px; */
}
@media only screen and (min-width: 1440px) {
    /* styles for browsers larger than 1440px; */
}
@media only screen and (min-width: 2000px) {
    /* for sumo sized (mac) screens */
}
@media only screen and (max-device-width: 480px) {
   /* styles for mobile browsers smaller than 480px; (iPhone) */
}
@media only screen and (device-width: 768px) {
   /* default iPad screens */
}
/* different techniques for iPad screening */
@media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
  /* For portrait layouts only */
}

@media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
  /* For landscape layouts only */
}

// xs (portrait phones, less than 576px)
// sm (landscape phones, 576px and up)
// md (tablets, 768px and up)
// lg (desktops, 992px and up)
// xl (large desktops, 1200px and up)
/***********************/
@media (min-width: 576px) { ... }
@media (min-width: 768px) { ... }
@media (min-width: 992px) { ... }
@media (min-width: 1200px) { ... }

@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}

/***********************/
@media (max-width: 575.98px) { ... }
@media (max-width: 767.98px) { ... }
@media (max-width: 991.98px) { ... }
@media (max-width: 1199.98px) { ... }
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }

@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}

/***********************/
@media (max-width: 575.98px) { ... }
@media (min-width: 576px) and (max-width: 767.98px) { ... }
@media (min-width: 768px) and (max-width: 991.98px) { ... }
@media (min-width: 992px) and (max-width: 1199.98px) { ... }
@media (min-width: 1200px) { ... }

@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }


@media (min-width: 768px) and (max-width: 1199.98px) { ... }
@include media-breakpoint-between(md, xl) { ... }


/*****************/

@include media-breakpoint-down(sm) {
    padding: 5px;
    border-radius: 2px;
}





@include media-breakpoint-between(sm,md) => @media (min-width: 576px) and (max-width: 991px)

@include media-breakpoint-up(sm)=> @media (min-width: 576px)
@include media-breakpoint-down(sm)  => @media (max-width: 767.98px)
