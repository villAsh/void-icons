import Zap from "@/icons/zap";
import Shield from "@/icons/shield";
import Sparkles from "@/icons/sparkles";
import type { ShowcaseItem } from "@/components/home/showcase";
import Globe from "@/icons/globe";
import Heart from "@/icons/heart";
import Star from "@/icons/star";
import Cloud from "@/icons/cloud";
import Sun from "@/icons/sun";
import Moon from "@/icons/moon";
import Copy from "@/icons/copy";
import Check from "@/icons/check";
import terminal from "@/icons/terminal";
import activity from "@/icons/activity";
import Airplay from "@/icons/airplay";
import AlarmClock from "@/icons/alarm-clock";
import AlarmClockPlus from "@/icons/alarm-clock-plus";
import Ambulance from "@/icons/ambulance";
import Anchor from "@/icons/anchor";
import Aperture from "@/icons/aperture";
import Accessibility from "@/icons/accessibility";
import ArrowDown from "@/icons/arrow-down";
import ArrowLeft from "@/icons/arrow-left";
import ArrowRight from "@/icons/arrow-right";
import ArrowUp from "@/icons/arrow-up";
import AudioLines from "@/icons/audio-lines";
import Award from "@/icons/award";
import BadgeAlert from "@/icons/badge-alert";
import BadgeCheck from "@/icons/badge-check";
import BadgeInfo from "@/icons/badge-info";
import BadgeQuestionMark from "@/icons/badge-question-mark";
import BadgeX from "@/icons/badge-x";
import Battery from "@/icons/battery";
import BatteryCharging from "@/icons/battery-charging";
import BatteryFull from "@/icons/battery-full";
import BatteryLow from "@/icons/battery-low";
import BatteryMedium from "@/icons/battery-medium";
import BatteryWarning from "@/icons/battery-warning";
import Bell from "@/icons/bell";
import BellRing from "@/icons/bell-ring";
import BellOff from "@/icons/bell-off";
import BellDot from "@/icons/bell-dot";
import Bike from "@/icons/bike";
import Binary from "@/icons/binary";
import Bitcoin from "@/icons/bitcoin";
import Bluetooth from "@/icons/bluetooth";
import BluetoothConnected from "@/icons/bluetooth-connected";
import BluetoothOff from "@/icons/bluetooth-off";
import BluetoothSearching from "@/icons/bluetooth-searching";
import Bookmark from "@/icons/bookmark";
import Braces from "@/icons/braces";
import Brackets from "@/icons/brackets";
import Brain from "@/icons/brain";
import BriefcaseBusiness from "@/icons/briefcase-business";
import Bug from "@/icons/bug";
import BugOff from "@/icons/bug-off";
import BugPlay from "@/icons/bug-play";
import Calendar from "@/icons/calendar";
import Calendar1 from "@/icons/calendar-1";
import CalendarCheck2 from "@/icons/calendar-check-2";
import Camera from "@/icons/camera";
import CameraOff from "@/icons/camera-off";
import Captions from "@/icons/captions";
import Cast from "@/icons/cast";
import ChartArea from "@/icons/chart-area";
import ChartBar from "@/icons/chart-bar";
import ChartBarDecreasing from "@/icons/chart-bar-decreasing";
import ChartBarIncreasing from "@/icons/chart-bar-increasing";
import ChartCandlestick from "@/icons/chart-candlestick";
import ChartColumn from "@/icons/chart-column";
import ChartColumnDecreasing from "@/icons/chart-column-decreasing";
import ChartColumnIncreasing from "@/icons/chart-column-increasing";
import ChartLine from "@/icons/chart-line";
import ChartNoAxesCombined from "@/icons/chart-no-axes-combined";
import ChartPie from "@/icons/chart-pie";
import ChartSpline from "@/icons/chart-spline";
import ChevronDown from "@/icons/chevron-down";
import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";
import ChevronUp from "@/icons/chevron-up";
import ChevronsUpDown from "@/icons/chevrons-up-down";
import CircleArrowDown from "@/icons/circle-arrow-down";
import CircleArrowLeft from "@/icons/circle-arrow-left";
import CircleArrowRight from "@/icons/circle-arrow-right";
import CircleArrowUp from "@/icons/circle-arrow-up";
import CircleCheck from "@/icons/circle-check";
import CircleCheckBig from "@/icons/circle-check-big";
import CircleChevronDown from "@/icons/circle-chevron-down";
import CircleChevronLeft from "@/icons/circle-chevron-left";
import CircleChevronRight from "@/icons/circle-chevron-right";
import CircleChevronUp from "@/icons/circle-chevron-up";
import Scan from "@/icons/scan";
import ScanEye from "@/icons/scan-eye";
import ScanHeart from "@/icons/scan-heart";
import ScanLine from "@/icons/scan-line";
import ScanSearch from "@/icons/scan-search";
import ScreenShare from "@/icons/screen-share";
import ScreenShareOff from "@/icons/screen-share-off";
import Search from "@/icons/search";
import Send from "@/icons/send";
import SendHorizontal from "@/icons/send-horizontal";
import Share from "@/icons/share";
import ShieldCheck from "@/icons/shield-check";
import Shuffle from "@/icons/shuffle";

export const features = [
  {
    title: "Drop-in Ready",
    description:
      "Import and use instantly. No wrappers, no config, no surprises.",
    icon: Shield,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Performant SVG",
    description:
      "Lightweight, inline SVGs optimized for the web. No external requests, meaning instant loading without layout shift.",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Fully Customizable",
    description:
      "Control size, color, stroke width, and animation variants using standard React props and utility classes.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
];

export const ANIMATED_ICONS: ShowcaseItem[] = [
  { icon: Zap, name: "zap", label: "Zap", category: "Development" },
  { icon: Shield, name: "shield", label: "Shield", category: "Security" },
  { icon: Globe, name: "globe", label: "Globe", category: "Communication" },
  { icon: Heart, name: "heart", label: "Heart", category: "Social" },
  { icon: Star, name: "star", label: "Star", category: "Social" },
  { icon: Sparkles, name: "sparkles", label: "Sparkles", category: "Effects" },
  { icon: Cloud, name: "cloud", label: "Cloud", category: "Weather" },
  { icon: Sun, name: "sun", label: "Sun", category: "Weather" },
  { icon: Moon, name: "moon", label: "Moon", category: "Weather" },
  { icon: Copy, name: "copy", label: "Copy", category: "Communication" },
  { icon: Check, name: "check", label: "Check", category: "Communication" },
  {
    icon: terminal,
    name: "terminal",
    label: "Terminal",
    category: "Communication",
  },
  {
    icon: activity,
    name: "activity",
    label: "Activity",
    category: "Effects",
  },
  {
    icon: Airplay,
    name: "airplay",
    label: "Airplay",
    category: "Communication",
  },
  {
    icon: AlarmClock,
    name: "alarm-clock",
    label: "Alarm Clock",
    category: "Communication",
  },
  {
    icon: AlarmClockPlus,
    name: "alarm-clock-plus",
    label: "Alarm Clock Plus",
    category: "Communication",
  },
  {
    icon: Ambulance,
    name: "ambulance",
    label: "Ambulance",
    category: "Communication",
  },
  {
    icon: Anchor,
    name: "anchor",
    label: "Anchor",
    category: "Communication",
  },
  {
    icon: Aperture,
    name: "aperture",
    label: "Aperture",
    category: "Communication",
  },
  {
    icon: Accessibility,
    name: "accessibility",
    label: "Accessibility",
    category: "Communication",
  },
  {
    icon: ArrowUp,
    name: "arrow-up",
    label: "ArrowUp",
    category: "Communication",
  },
  {
    icon: ArrowDown,
    name: "arrow-down",
    label: "ArrowDown",
    category: "Communication",
  },
  {
    icon: ArrowRight,
    name: "arrow-right",
    label: "ArrowRight",
    category: "Communication",
  },
  {
    icon: ArrowLeft,
    name: "arrow-left",
    label: "ArrowLeft",
    category: "Communication",
  },
  {
    icon: AudioLines,
    name: "audio-lines",
    label: "AudioLines",
    category: "Communication",
  },
  {
    icon: Award,
    name: "award",
    label: "Award",
    category: "Communication",
  },
  {
    icon: BadgeAlert,
    name: "badge-alert",
    label: "BadgeAlert",
    category: "Communication",
  },
  {
    icon: BadgeCheck,
    name: "badge-check",
    label: "BadgeCheck",
    category: "Communication",
  },
  {
    icon: BadgeInfo,
    name: "badge-info",
    label: "BadgeInfo",
    category: "Communication",
  },
  {
    icon: BadgeQuestionMark,
    name: "badge-question-mark",
    label: "BadgeQuestionMark",
    category: "Communication",
  },
  {
    icon: BadgeX,
    name: "badge-x",
    label: "BadgeX",
    category: "Communication",
  },
  {
    icon: Battery,
    name: "battery",
    label: "Battery",
    category: "Communication",
  },
  {
    icon: BatteryCharging,
    name: "battery-charging",
    label: "BatteryCharging",
    category: "Communication",
  },
  {
    icon: BatteryFull,
    name: "battery-full",
    label: "BatteryFull",
    category: "Communication",
  },
  {
    icon: BatteryLow,
    name: "battery-low",
    label: "BatteryLow",
    category: "Communication",
  },
  {
    icon: BatteryMedium,
    name: "battery-medium",
    label: "BatteryMedium",
    category: "Communication",
  },
  {
    icon: BatteryWarning,
    name: "battery-warning",
    label: "BatteryWarning",
    category: "Communication",
  },
  {
    icon: Bell,
    name: "bell",
    label: "Bell",
    category: "Communication",
  },
  {
    icon: BellRing,
    name: "bell-ring",
    label: "BellRing",
    category: "Communication",
  },
  {
    icon: BellOff,
    name: "bell-off",
    label: "BellOff",
    category: "Communication",
  },
  {
    icon: BellDot,
    name: "bell-dot",
    label: "BellOff",
    category: "Communication",
  },
  {
    icon: Bike,
    name: "bike",
    label: "Bike",
    category: "Communication",
  },
  {
    icon: Binary,
    name: "binary",
    label: "Binary",
    category: "Communication",
  },
  {
    icon: Bitcoin,
    name: "bitcoin",
    label: "Bitcoin",
    category: "Communication",
  },
  {
    icon: Bluetooth,
    name: "bluetooth",
    label: "Bluetooth",
    category: "Communication",
  },
  {
    icon: BluetoothConnected,
    name: "bluetooth-connected",
    label: "BluetoothConnected",
    category: "Communication",
  },
  {
    icon: BluetoothOff,
    name: "bluetooth-off",
    label: "BluetoothOff",
    category: "Communication",
  },
  {
    icon: BluetoothSearching,
    name: "bluetooth-searching",
    label: "BluetoothSearching",
    category: "Communication",
  },
  {
    icon: Bookmark,
    name: "bookmark",
    label: "Bookmark",
    category: "Communication",
  },
  {
    icon: Braces,
    name: "braces",
    label: "Braces",
    category: "Communication",
  },
  {
    icon: Brackets,
    name: "brackets",
    label: "Brackets",
    category: "Communication",
  },
  {
    icon: Brain,
    name: "brain",
    label: "Brain",
    category: "Communication",
  },
  {
    icon: BriefcaseBusiness,
    name: "briefcase-business",
    label: "Briefcase Business",
    category: "Communication",
  },
  {
    icon: Bug,
    name: "bug",
    label: "Bug",
    category: "Communication",
  },
  {
    icon: BugOff,
    name: "bug-off",
    label: "Bug Off",
    category: "Communication",
  },
  {
    icon: BugPlay,
    name: "bug-play",
    label: "Bug Play",
    category: "Communication",
  },
  {
    icon: Calendar,
    name: "calendar",
    label: "Calendar",
    category: "Communication",
  },
  {
    icon: Calendar1,
    name: "calendar-1",
    label: "Calendar 1",
    category: "Communication",
  },
  {
    icon: CalendarCheck2,
    name: "calendar-check-2",
    label: "Calendar Check",
    category: "Communication",
  },
  {
    icon: Camera,
    name: "camera",
    label: "Camera",
    category: "Communication",
  },
  {
    icon: CameraOff,
    name: "camera-off",
    label: "Camera Off",
    category: "Communication",
  },
  {
    icon: Captions,
    name: "captions",
    label: "Captions",
    category: "Communication",
  },
  {
    icon: Cast,
    name: "cast",
    label: "Cast",
    category: "Communication",
  },
  {
    icon: ChartArea,
    name: "chart-area",
    label: "Chart Area",
    category: "Charts",
  },
  {
    icon: ChartBar,
    name: "chart-bar",
    label: "Chart Bar",
    category: "Charts",
  },
  {
    icon: ChartBarDecreasing,
    name: "chart-bar-decreasing",
    label: "Chart Bar Decreasing",
    category: "Charts",
  },
  {
    icon: ChartBarIncreasing,
    name: "chart-bar-increasing",
    label: "Chart Bar Increasing",
    category: "Charts",
  },
  {
    icon: ChartCandlestick,
    name: "chart-candlestick",
    label: "Chart Candlestick",
    category: "Charts",
  },
  {
    icon: ChartColumn,
    name: "chart-column",
    label: "Chart Column",
    category: "Charts",
  },
  {
    icon: ChartColumnDecreasing,
    name: "chart-column-decreasing",
    label: "Chart Column Decreasing",
    category: "Charts",
  },
  {
    icon: ChartColumnIncreasing,
    name: "chart-column-increasing",
    label: "Chart Column Increasing",
    category: "Charts",
  },
  {
    icon: ChartLine,
    name: "chart-line",
    label: "Chart Line",
    category: "Charts",
  },
  {
    icon: ChartNoAxesCombined,
    name: "chart-no-axes-combined",
    label: "Chart No Axes Combined",
    category: "Charts",
  },
  {
    icon: ChartPie,
    name: "chart-pie",
    label: "Chart Pie",
    category: "Charts",
  },
  {
    icon: ChartSpline,
    name: "chart-spline",
    label: "Chart Spline",
    category: "Charts",
  },
  {
    icon: ChevronDown,
    name: "chevron-down",
    label: "Chevron Down",
    category: "Arrows",
  },
  {
    icon: ChevronLeft,
    name: "chevron-left",
    label: "Chevron Left",
    category: "Arrows",
  },
  {
    icon: ChevronRight,
    name: "chevron-right",
    label: "Chevron Right",
    category: "Arrows",
  },
  {
    icon: ChevronUp,
    name: "chevron-up",
    label: "Chevron Up",
    category: "Arrows",
  },
  {
    icon: ChevronsUpDown,
    name: "chevrons-up-down",
    label: "Chevrons Up Down",
    category: "Arrows",
  },
  {
    icon: CircleArrowDown,
    name: "circle-arrow-down",
    label: "Circle Arrow Down",
    category: "Arrows",
  },
  {
    icon: CircleArrowLeft,
    name: "circle-arrow-left",
    label: "Circle Arrow Left",
    category: "Arrows",
  },
  {
    icon: CircleArrowRight,
    name: "circle-arrow-right",
    label: "Circle Arrow Right",
    category: "Arrows",
  },
  {
    icon: CircleArrowUp,
    name: "circle-arrow-up",
    label: "Circle Arrow Up",
    category: "Arrows",
  },
  {
    icon: CircleCheck,
    name: "circle-check",
    label: "Circle Check",
    category: "Status",
  },
  {
    icon: CircleCheckBig,
    name: "circle-check-big",
    label: "Circle Check Big",
    category: "Status",
  },
  {
    icon: CircleChevronDown,
    name: "circle-chevron-down",
    label: "Circle Chevron Down",
    category: "Arrows",
  },
  {
    icon: CircleChevronLeft,
    name: "circle-chevron-left",
    label: "Circle Chevron Left",
    category: "Arrows",
  },
  {
    icon: CircleChevronRight,
    name: "circle-chevron-right",
    label: "Circle Chevron Right",
    category: "Arrows",
  },
  {
    icon: CircleChevronUp,
    name: "circle-chevron-up",
    label: "Circle Chevron Up",
    category: "Arrows",
  },
  {
    icon: Scan,
    name: "scan",
    label: "Scan",
    category: "Communication",
  },
  {
    icon: ScanEye,
    name: "scan-eye",
    label: "Scan Eye",
    category: "Communication",
  },
  {
    icon: ScanHeart,
    name: "scan-heart",
    label: "Scan Heart",
    category: "Communication",
  },
  {
    icon: ScanLine,
    name: "scan-line",
    label: "Scan Line",
    category: "Communication",
  },
  {
    icon: ScanSearch,
    name: "scan-search",
    label: "Scan Search",
    category: "Communication",
  },
  {
    icon: ScreenShare,
    name: "screen-share",
    label: "Screen Share",
    category: "Communication",
  },
  {
    icon: ScreenShareOff,
    name: "screen-share-off",
    label: "Screen Share Off",
    category: "Communication",
  },
  {
    icon: Search,
    name: "search",
    label: "Search",
    category: "Communication",
  },
  {
    icon: Send,
    name: "send",
    label: "Send",
    category: "Communication",
  },
  {
    icon: SendHorizontal,
    name: "send-horizontal",
    label: "Send Horizontal",
    category: "Communication",
  },
  {
    icon: Share,
    name: "share",
    label: "Share",
    category: "Communication",
  },
  {
    icon: ShieldCheck,
    name: "shield-check",
    label: "Shield Check",
    category: "Status",
  },
  {
    icon: Shuffle,
    name: "shuffle",
    label: "Shuffle",
    category: "Communication",
  },
];
