import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import GroupIcon from "@material-ui/icons/Group";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SettingsIcon from "@material-ui/icons/Settings";
import PanoramaFishEyeIcon from "@material-ui/icons/PanoramaFishEye";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ApartmentIcon from "@material-ui/icons/Apartment";
import HistoryIcon from "@material-ui/icons/History";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import EventIcon from "@material-ui/icons/Event";
import CodeIcon from "@material-ui/icons/Code";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import VisibilityIcon from "@material-ui/icons/Visibility";

const ListDrawers = [
  {
    id: "Employee",
    name: "Quản lý nhân viên",
    link: "/employee",
    icon: <AssignmentIndIcon />,
    hide: true,
  },
  {
    id: "GroupCustomer",
    name: "Quản lý khách hàng",
    icon: <GroupIcon />,
    hide: true,
    menus: [
      {
        id: "Customer",
        name: "Danh sách khách hàng",
        link: "/customer",
        icon: <PanoramaFishEyeIcon />,
        hide: true,
      },
      {
        id: "CustomerCard",
        name: "Tài khoản khách hàng",
        link: "/customer/card",
        icon: <PanoramaFishEyeIcon />,
        hide: true,
      },
    ],
    active: false,
  },
];

export default ListDrawers;
