import { getMobileOS, PLATFORM_ANDROID, } from '../../utils';
/*Rating keys*/
export const SKIP_RATING = 0;
export const RATING_SUBMIT = 1;
export const RATING_LOGOUT_ACTION = 2;
export const UPDATE_IS_APP_REDIRECTED_FLAG = 3;

/*Component Id*/
export const NPS_SCORE_COMPONENT_ID = 1;

/*Nps headings*/
export const EASE_USE_HEADING = "Ease of Use";
export const PRODUCT_FEATURES_HEADING = "Product Features";
export const SUPPORT_HELPDESK_HEADING = "Support Helpdesk";
export const UPTIME_SPEED_HEADING = "Uptime & Speed";

export const EASE_USE_ID = "1";
export const PRODUCT_FEATURES_ID = "2";
export const SUPPORT_HELPDESK_ID = "3";
export const UPTIME_SPEED_ID = "4";
/*Rating text*/
export const RATING_HEADING = "How did we do?";
export const RATING_BODY = "Thank you for using the EmployWise App. Please help us by rating your experience using our App.";
export const RATING_BODY_H2 = "It won't take more than a minute. Thanks for your support!";
export const RATING_SUBMIT_HEADING = "Thank You So Much!";
export const RATING_NEGATIVE_BODY = "We are sorry to have disappointed you";
export const RATING_NEGATIVE_BODY_H2 = "Would you like to give us some feedback?";
export const RATING_POSITIVE_BODY = "We are glad you are enjoying using EmployWise";
export const RATING_POSITIVE_BODY_H2 = "Would you be willing to rate us in the " + (getMobileOS() == PLATFORM_ANDROID ? "play" : "app") + " store?";
export const SKIP_BUTTON_LABEL = "Maybe later";
export const SUBMIT_BUTTON_LABEL = "Submit";
export const RATE_US_BUTTON_LABEL = "Rate App";

/*Pending item heading text labels */
export const APPROVE_LEAVE_LABEL = "Approve Leave";
export const APPROVE_LEAVE_CANCELLATION_LABEL = "Approve Leave Cancellation";
export const APPROVE_OUT_ON_WORK_LABEL = "Approve Out-on-Work";
export const APPROVE_PAST_ATTENDANCE_LABEL = "Approve Past Attendance";
export const APPROVE_TRAVEL_LABEL = "Approve Travel";
export const APPROVE_MILEAGE_CLAIM_LABEL = "Approve Mileage Claim";
export const APPROVE_OTHER_CLAIM_LABEL = "Approve Other Claim";

/*Fab button headings
export const APPLY_LEAVE_LABEL = "Apply For Leave";
export const APPLY_OUT_ON_WORK_LABEL = "Apply For Out-on-Work";
export const APPLY_PAST_ATTENDANCE_LABEL = "Apply For Past Attendance";
export const APPLY_TRAVEL_LABEL = "Apply For Travel";
export const APPLY_MILEAGE_CLAIM_LABEL = "Apply For Mileage Claim";
export const APPLY_OTHERS_CLAIM_LABEL = "Apply For Others Claim";*/

/*Bottom navigation headings*/
export const APPLY_LEAVE_LABEL = "Leave2";
export const APPLY_OUT_ON_WORK_LABEL = "Out-on-Work1";
export const APPLY_PAST_ATTENDANCE_LABEL = "Past Attendance2";
export const APPLY_TRAVEL_LABEL = "Travel Request";
export const APPLY_MILEAGE_CLAIM_LABEL = "Mileage Claim";
export const APPLY_OTHERS_CLAIM_LABEL = "Others Claim";


export const MARK_IN_NOT_AVAILABLE = 0 ;
export const MARK_IN_ATTENDANCE = 1 ;
export const MARK_OUT_ATTENDANCE = 2 ;
export const MARK_OUT_PAST_ATTENDANCE = 3 ;
export const MARK_IN_NOT_ALLOWED = 5 ;

export const PENDING_LEAVE = 1;

export const PENDING_OD_REQUEST = 2;

export const PENDING_PAST_ATTENANCE = 3;

export const PENDING_TRAVEL = 1;
export const PENDING_CONVEYANCE_CLAIM = 4;
export const PENDING_OTHER_CLAIM = 3;
export const PENDING_TRAVEL_CLAIM = 2;

export const APPLY_LEAVE = 1;

export const CANCEL_LEAVE = 2;

export const RECONSIDER_LEAVE = 3;

export const GPS_NOT_AVAILABLE = "No location provider available.";

export const LOCATION_NOT_CAPTURED = "Location request timed out";

export const LOCATION_PERMISSION_NOT_GRANTED = "LOCATION_PERMISSION_NOT_GRANTED";


/*Action button Keys*/
export const CREATE_LEAVE_KEY = "CREATE_LEAVE";
export const CREATE_OUT_ON_WORK_KEY = "CREATE_OUT_ON_WORK";
export const CREATE_PAST_ATTENDANCE_KEY = "CREATE_PAST_ATTENDANCE";
export const CREATE_TRAVEL_KEY = "CREATE_TRAVEL";
export const CREATE_EXPENSE_KEY = "CREATE_EXPENSE_KEY";
export const CREATE_MILEAGE_KEY = "CREATE_MILEAGE_KEY";
export const CREATE_MILEAGE_CLAIM_KEY = "CREATE_MILEAGE_CLAIM_KEY";
export const CREATE_OTHERS_CLAIM_KEY = "CREATE_OTHERS_CLAIM_KEY";

/*expense keys*/

export const EXPENSE_TRAVEL_KEY = "EXPENSE_TRAVEL_KEY";
export const EXPENSE_TRAVEL_LABEL = "Travel";

export const EXPENSE_STAY_KEY = "EXPENSE_STAY_KEY";
export const EXPENSE_STAY_LABEL = "Stay";

export const EXPENSE_FOOD_KEY = "EXPENSE_FOOD_KEY";
export const EXPENSE_FOOD_LABEL = "Food & Beverages";

export const EXPENSE_TRANSPORT_KEY = "EXPENSE_TRANSPORT_KEY";
export const EXPENSE_TRANSPORT_LABEL = "Public transport";

export const EXPENSE_MILEAGE_KEY = "EXPENSE_MILEAGE_KEY";
export const EXPENSE_MILEAGE_LABEL = "Mileage";

export const EXPENSE_PARKING_KEY = "EXPENSE_PARKING_KEY";
export const EXPENSE_PARKING_LABEL = "Parking & Toll";

export const EXPENSE_OTHERS_KEY = "EXPENSE_OTHERS_KEY";
export const EXPENSE_OTHERS_LABEL = "Others";

export const EXPENSE_INVOICE_KEY = "EXPENSE_INVOICE_KEY";
/*Location error messages*/
export const MESSAGE_GPS_TURNED_OFF = "Location service switched off";
export const MESSAGE_LOCATION_PERMISSION_NOT_GRANTED = "Location services not enabled";
export const MESSAGE_LOCATION_CANT_CAPTURE = "Location couldn’t capture";

/*Action button labels*/

/*Mark in mark out labels*/
export const ATTENDANCE_STATUS_MARKED_IN = "Marked in ";
export const ATTENDANCE_STATUS_MARKED_OUT = "Marked out ";

/*attendance status labels*/
export const MARK_IN_ATTENDANCE_LABEL = "Mark In";
export const MARK_OUT_ATTENDANCE_LABEL = "Mark Out";
export const MARK_OUT_PAST_ATTENDANCE_LABEL = "Mark Your Past Attendance";

/*User rating constants*/

export const DEFAULT_RATING = "0" ;

export const MAX_RATING = "5" ;

export const MIN_STAR_RATING_REQUIRED = 4 ;


/*Drawer sidebar subitem id */

export const MY_LEAVES_SUBITEM_ID = 0;
export const MY_OD_SUBITEM_ID = 1;
export const MY_PAST_ATTENDANCE_SUBITEM_ID = 2;
export const MY_TRAVEL_SUBITEM_ID = 3;
export const MY_EXPENSE_SUBITEM_ID = 4;


export const MY_REQUEST_ID = 5;
export const MY_HOLIDAYS_ID = 6;
export const MY_CALENDAR_ID = 7;
export const EMPLOYEE_DIRECTORY_ID = 8;
export const PAYSLIP_ID = 9;
export const MY_COMPENSATION_ID = 10;
