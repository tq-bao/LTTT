import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from './CookieService';
declare var Android: any;
@Injectable()
export class AppService {
    headers = new Headers({ 'Content-Type': 'application/json' });

    headers_post = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    Observable;

    host = "http://localhost:3000/api";
    token = "";
    constructor(private router: Router, private HttpClient: HttpClient, private http: Http) {

    }
    Gallery(): any {
        Android.Gallery();
    }
    isLogin(id, username): any {
        Android.isLogin(id, username);
    }
    CameraOpen(): any {
        Android.CameraOpen();
    }
    //takepicture
    TakePicture(): any {
        Android.ChosePicture();
    }

    DetectFace(): any {
        Android.DetectFace();
    }

    startLocation(): any {
        Android.startLocation();
    }
    //
    ChosePicture(): any {
        Android.ChosePicture();
    }

    PrintHTMLDocument(html): any {
        Android.PrintHTMLDocument(html);
    }

    //upload img base 64
    Adtest(): any {
        Android.ShowToast("aaaaaa");
    }

    Login_Getinfor(): any {
        var result = Android.Login_Getinfor();
        return result;
    }
    UploadPicture(code): any {
        var result = Android.UploadPicture();
        return result;
    }

    
    //host = "http://api.mb.vps.vn/api";
    hostold = "http://115.84.182.231:8976/api/v3/Lading/";
    host231 = "http://115.84.182.231:8976/api/v3/Lading/";

    GetAndroidVersionOfDevice(): any {
        var result = Android.GetAndroidVersionOfDevice();
        return result;
    }

    GetDeviceName(): any {
        var result = Android.GetDeviceName();
        return result;
    }

    GetVersionAndroid(): any {
        var result = Android.GetVersionAndroid();
        return result;
    }

    ScandByCamera(): any {
        Android.scanBarcode();
    }
    TakeScan(): any {
        Android.TakeScan();
    }
    GetMobileDiviceIMEI(): any {
        var phoneNumber = Android.GetMobileDiviceIMEI();
        return phoneNumber;
    }
    GetScan(): any {
        var result = Android.getScan();
        return result;

    }
    GetCurrentLocation(): any {
        var result = Android.GetCurrentLocation();
        return result;
    }
    LogoutJS(): any {
        Android.LogoutJS();
    }
    scanBarcode(): any {
        var result = Android.scanBarcode();
        return result;
    }
    //upload img base 64
    Upload_UrlImgCKDT(data, component): any {
        return this.handlePostAPIxmlold(this.host231 + "/LadingSaveImages", data, component);
    }

    //upload img base 64
    Upload_UrlImg(data, component): any {
        return this.handlePostAPIxml("http://api.mb.vps.vn/Upload_UrlImg", data, component);
    }

    //tạo bảng kê phát
    MB_spBK_Delivery_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Deliveries/MB_spBK_Delivery_Save", data, component);
    }
    //check lastlog
    MB_spBK_Delivery_CheckLastLog(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Deliveries/MB_spBK_Delivery_CheckLastLog", data, component);
    }


    MB_spLadingDeliveryMen_Access(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Deliveries/MB_spLadingDeliveryMen_Access", data, component);
    }
    //lấy danh sách báo phát
    MB_spLadingDeliveryMen(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Deliveries/MB_spLadingDeliveryMen", data, component);
    }
    //get sản phẩm từ mã code
    MB_spProducts_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Products/MB_spProducts_Get", data, component);
    }
    //get danh sách bảng kê theo sdt và mã vẫn đơn
    MB_spBK_Delivery_GetLading(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Deliveries/MB_spBK_Delivery_GetLading", data, component);
    }
    //lấy danh sách phòng ban\
    MB_spDeparment_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Deparments/MB_spDeparment_Get", data, component);
    }

    //Lấy code bảng kê theo OfficerId & PostOfficerId
    MB_BKInternalAirCode_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_BKInternalAirCode_Get", data, component);
    }
    //Save bảng kê hàng bay
    // LGT_spPackageNumberCreateAirBK(data, component): any {
    //     return this.handlePostAPIxml(this.host + "/MB_internals/LGT_spPackageNumberCreateAirBK", data, component);
    // }
    MB_spPackageNumberCreateAirBK(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spPackageNumberCreateAirBK", data, component);
    }
    //lấy danh sách xe
    MB_spVehicle_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Products/MB_spVehicle_Get", data, component);
    }
    //xác nhận đơn hàng
    MB_spReportOrderReceive_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_ReportOrders/MB_spReportOrderReceive_Get", data, component);
    }
    MB_BK_internal_AIRCode_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_BK_internal_AIRCode_List", data, component);
    }
    MB_spBK_internal_AIRCode_Update(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBK_internal_AIRCode_Update", data, component);
    }
    MB_spBk_internal_CheckOut_Detail_Report(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBk_internal_CheckOut_Detail_Report", data, component);
    }
    MB_spBk_internal_CheckOut_Report(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBk_internal_CheckOut_Report", data, component);
    }
    LGT_spBk_internal_CheckInBill(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/LGT_spBk_internal_CheckInBill", data, component);
    }
    LGT_spBk_internal_CheckIn_ListBill(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/LGT_spBk_internal_CheckIn_ListBill", data, component);
    }
    //check khoảng cách
    MB_spBK_internal_CheckDistance(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBK_internal_CheckDistance", data, component);
    }
    LGT_spBk_internal_CheckOutBill(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/LGT_spBk_internal_CheckOutBill", data, component);
    }
    APP_spKPI_Confirm_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_KPIs/APP_spKPI_Confirm_List", data, component);
    }
    APP_spKPI_Confirm_Emp_New(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_KPIs/APP_spKPI_Confirm_Emp_New", data, component);
    }
    E_spTest_Check_New(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_ELearnings/E_spTest_Check_New", data, component);
    }
    E_spELearning_LoadData(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_ELearnings/E_spELearning_LoadData", data, component);
    }
    E_spClass_Trainees_InsertQuestion_New(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_ELearnings/E_spClass_Trainees_InsertQuestion_New", data, component);
    }
    // lấy danh sách câu hoi
    E_spELearning_GetAll_Question(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_ELearnings/E_spELearning_GetAll_Question", data, component);
    }
    // lấy danh sách câu tl
    E_spELearning_GetAll_Answer(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_ELearnings/E_spELearning_GetAll_Answer", data, component);
    }
    // nộp bài thi
    E_spClass_Trainees_Question_Update_New(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_ELearnings/E_spClass_Trainees_Question_Update_New", data, component);
    }
    MB_spLading_COD_HHKG(data, component): any {
        return this.handlePostAPIxmlold(this.hostold + "MB_spLading_COD_HHKG", data, component);
    }
    UpdatePrice_New(data, component): any {
        return this.handlePostAPIxmlold(this.hostold + "UpdatePrice_New", data, component);
    }
    MB_spLading_VAT_PPXD(data, component): any {
        return this.handlePostAPIxmlold(this.hostold + "MB_spLading_VAT_PPXD", data, component);
    }
    Motify_SendMail(data, component): any {
        return this.handlePostAPIxmlold(this.hostold + "/Motify_SendMail", data, component);
    }
    //lấy Cod của nhân viên theo ngày hôm nay
    MB_spLading_COD_Officer(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Lading_CODs/MB_spLading_COD_Officer", data, component);
    }

    //xác nhận bảng kê nội bộ
    MB_spBK_internalConfirm_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBK_internalConfirm_Save", data, component);
    }
    MB_spBK_internalConfirm_ListLadingNot_Paging(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBK_internalConfirm_ListLadingNot_Paging", data, component);
    }
    //danh sách bảng kê nội bộ chưa xác nhận
    MB_spBK_internalConfirm_ListLadingNot(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBK_internalConfirm_ListLadingNot", data, component);
    }
    //Xác nhận bảng kê hàng bay
    MB_spPackageNumberAirBK_Confirm(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spPackageNumberAirBK_Confirm", data, component);
    }
    //Lấy danh sách bảng kê hàng bay
    LGT_spPackageNumberSearchAirBK(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/LGT_spPackageNumberSearchAirBK", data, component);
    }
    LGT_BK_internal_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/LGT_BK_internal_List", data, component);
    }
    MB_spBK_internal_CheckOutSave(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBK_internal_CheckOutSave", data, component);
    }
    //xác nhận bảng kê đi
    MB_spBK_internal_CheckInSave(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBK_internal_CheckInSave", data, component);
    }
    MB_spBK_internal_CheckOut_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBK_internal_CheckOut_List", data, component);
    }
    //danh sách bảng kê đi
    MB_spBK_internal_CheckIn(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBK_internal_CheckIn", data, component);
    }
    //Save bảng kê nội bộ
    MB_spBK_internal_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_internals/MB_spBK_internal_Save", data, component);
    }
    //get các vẫn đơn khác với officeid
    MB_spLading_NotOfficerId(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLading_NotOfficerId", data, component);
    }

    MB_spLading_List_Getting(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLading_List_Getting", data, component);
    }
    MB_spLadingDeliveryMen_GetSuccess(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLadingDeliveryMen_GetSuccess", data, component);
    }
    MB_spCRM_tblCustomerOrderImages_SaveImg(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCRM_tblCustomerOrderImages_SaveImg", data, component);
    }
    MB_spCRM_tblCustomerOrderImages_GetRecieve(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCRM_tblCustomerOrderImages_GetRecieve", data, component);
    }
    MB_spLadingDeliveryMen_GetSuccess_New(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLadingDeliveryMen_GetSuccess_New", data, component);
    }

    MB_spLading_Update_Image(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLading_Update_Image", data, component);
    }
    MB_spLadingDeliveryMen_Holding(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLadingDeliveryMen_Holding", data, component);
    }
    //get vận đơn đã tạo nội bộ
    MB_spLading_byIduserImport(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLading_byIduserImport", data, component);
    }
    MB_spPostOffice_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Officers/MB_spPostOffice_Get", data, component);
    }
    // Lấy tên vs mã nhân viên đăng nhập
    MB_spOfficer_GetById(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Timekeepings/MB_spOfficer_GetById", data, component);
    }
    HR_spTimeSheet_Excel(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Timekeepings/HR_spTimeSheet_Excel", data, component);
    }
    //MB_spCodeBill_auto
    MB_spCodeBill_auto(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Officers/MB_spCodeBill_auto", data, component);
    }
    MB_spOfficer_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Officers/MB_spOfficer_Get", data, component);
    }
    MB_tblAndroidDetech_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Officers/MB_tblAndroidDetech_Save", data, component);
    }
    //get theo OfficerID
    MB_spOfficer_Get_ByOfficerID(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Officers/MB_spOfficer_Get_ByOfficerID", data, component);
    }
    MB_spOfficer_UpdateAndroidVersion(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Officers/MB_spOfficer_UpdateAndroidVersion", data, component);
    }

    MB_spOfficer_UpdateAndroidDeviceName(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Officers/MB_spOfficer_UpdateAndroidDeviceName", data, component);
    }

    //Checkin chấm công
    MB_OfficerTimekeeping_CheckIn(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Officers/MB_OfficerTimekeeping_CheckIn", data, component);
    }
    //Cập nhật số imei thiết bị
    MB_spOfficer_UpdateMobileDeviceIMEI(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Officers/MB_spOfficer_UpdateMobileDeviceIMEI", data, component);
    }
    //lưu lading 
    MB_spLading_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLading_Save", data, component);
    }
    //MB_spLading_Check_ExitCode
    MB_spLading_Check_ExitCode(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLading_Check_ExitCode", data, component);
    }
    //////////////////// MB_CustomerOrders ///////////////////////////////

    MB_spLading_DeliveryHandover_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLading_DeliveryHandover_List", data, component);
    }

    MB_spLading_DeliveryHandover_Handover_Redis(data, component): any {
        return this.handlePostAPIxmlold("https://erp-chat.vps.vn/api/ApiMB/Savedataredis", data, component);
    }

    MB_spLading_DeliveryHandover_Handover(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLading_DeliveryHandover_Handover", data, component);
    }

    /////////////////////Tạo vận đơn tổng///////////////////////////////
    LGT_spLadingBillTotal_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_LadingBillTotals/LGT_spLadingBillTotal_Save", data, component);
    }
    LGT_spLadingBillTotal_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_LadingBillTotals/LGT_spLadingBillTotal_List", data, component);
    }
    ///////////////////// End tạo vận đơn tổng ////////////////////////

    MB_spLadingDeliveryMen_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Deliveries/MB_spLadingDeliveryMen_List", data, component);
    }
    //MB_spLadingDeliveryMen
    MB_spCustomerOrderMen(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCustomerOrderMen", data, component);
    }
    MB_spElecLading_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spElecLading_List", data, component);
    }
    MB_spCustomerOrderMen_Status(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCustomerOrderMen_Status", data, component);
    }
    //Lấy idcustomer dựa trên code
    MB_spCustomer_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCustomer_Get", data, component);
    }
    MB_spRecipient_Phone_GetTop10(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spRecipient_Phone_GetTop10", data, component);
    }
    MB_spCustomer_GetTop10(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCustomer_GetTop10", data, component);
    }
    //check MB_CustomerOrders có được tạo trong bảng ngày hôm nay chưa
    MB_CustomerOrder_Check_ExitOnDate(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_CustomerOrder_Check_ExitOnDate", data, component);
    }
    //hiển thị danh sách lấy hàng
    MB_spCustomerOrderMen_Success(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCustomerOrderMen_Success", data, component);
    }
    MB_spCustomerOrderMen_Success_New(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCustomerOrderMen_Success_New", data, component);
    }

    MB_spCustomerOrder_Success_Lading_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCustomerOrder_Success_Lading_Get", data, component);
    }
    //Báo cáo
    MB_spRP_PickupOficer(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spRP_PickupOficer", data, component);
    }
    MB_spLading_DeliveryPoint_OfficerId(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spLading_DeliveryPoint_OfficerId", data, component);
    }
    MB_spLading_DeliveryQuantity(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spLading_DeliveryQuantity", data, component);
    }
    //báo cáo sản lượng hàng thu hồi LGT_tblOriginal
    LGT_spBkinternal_Return_Report(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Originals/LGT_spBkinternal_Return_Report", data, component);
    }

    CRM_spCustomerOrder_kpipickup_Officer(data, component): any {
        return this.handlePostAPIxml(this.host + "/Reports/CRM_spCustomerOrder_kpipickup_Officer", data, component);
    }
    LGT_spBk_internal_DealineOfficer_DeliveryDealine_Report(data, component): any {
        return this.handlePostAPIxml(this.host + "/Reports/LGT_spBk_internal_DealineOfficer_DeliveryDealine_Report", data, component);
    }
    //xác nhận báo cáo 
    MB_spConfirmQuantityOfficer_Report_Confirm(data, component): any {
        return this.handlePostAPIxml(this.host + "/Reports/MB_spConfirmQuantityOfficer_Report_Confirm", data, component);
    }
    LGT_spConfirmQuantityOfficer_Report(data, component): any {
        return this.handlePostAPIxml(this.host + "/Reports/LGT_spConfirmQuantityOfficer_Report", data, component);
    }
    LGT_spConfirmQuantityOfficer_Report_CreateBy(data, component): any {
        return this.handlePostAPIxml(this.host + "/Reports/LGT_spConfirmQuantityOfficer_Report_CreateBy", data, component);
    }
    LGT_spBk_internal_QuantityTranport(data, component): any {
        return this.handlePostAPIxml(this.host + "/Reports/LGT_spBk_internal_QuantityTranport", data, component);
    }
    MB_spConfirmQuantityOfficer_OfficerConfirm(data, component): any {
        return this.handlePostAPIxml(this.host + "/Reports/MB_spConfirmQuantityOfficer_OfficerConfirm", data, component);
    }
    MB_spConfirmQuantityOfficer_OfficerCancle(data, component): any {
        return this.handlePostAPIxml(this.host + "/Reports/MB_spConfirmQuantityOfficer_OfficerCancle", data, component);
    }
    MB_spConfirmQuantityOfficer_ListReport_Confirm_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/Reports/MB_spConfirmQuantityOfficer_ListReport_Confirm_Save", data, component);
    }
    MB_spLGT_tblConfirmQuantityOfficer_Check(data, component): any {
        return this.handlePostAPIxml(this.host + "/Reports/MB_spLGT_tblConfirmQuantityOfficer_Check", data, component);
    }
    MB_spCustomerOrder_LadingWeight_OfficerId(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCustomerOrder_LadingWeight_OfficerId", data, component);
    }
    MB_spCustomerOrder_LadingWeight_Point_OfficerId(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCustomerOrder_LadingWeight_Point_OfficerId", data, component);
    }
    MB_tblCustomerOrderImages_SaveAsPackage(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_tblCustomerOrderImages_SaveAsPackage", data, component);
    }
    MB_tblCustomerOrderImages_SaveAsPackage_New(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_tblCustomerOrderImages_SaveAsPackage_New", data, component);
    }
    MB_spCRM_tblCustomerOrderImages_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spCRM_tblCustomerOrderImages_Save", data, component);
    }
    MB_spRP_LadingReceive(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_spRP_LadingReceive", data, component);
    }

    LGT_spNotificationSystem_GetByOfficerId(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/LGT_spNotificationSystem_GetByOfficerId", data, component);
    }
    LGT_spNotificationSystem_Seen(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/LGT_spNotificationSystem_Seen", data, component);
    }

    CRM_SpCustomerInfor_Save(data, component): any {
        return this.handlePostAPIxmlold("https://erp-crm.vps.vn/CustomerInfor/CRM_SpCustomerInfor_Save", data, component);
    }

    MB_SystemNotification(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_CustomerOrders/MB_SystemNotification", data, component);
    }
    // Get nhân viên từ phòng ban
    MB_spDeparment_Get_Officer(data, component): any {
        return this.handlePostAPIxml(this.host + "/MBCTM_LadingComplains/MB_spDeparment_Get_Officer", data, component);
    }
    //Sản lượng - phụ cấp
    LGT_RP_QuantityDeliveryOfficerMB(data, component): any {
        return this.handlePostAPIxmlold(this.hostold + "/LGT_RP_QuantityDeliveryOfficerMB", data, component);
    }
    ///////////////////////////////////////////////////////////////////////////
    VeryfiSMS(data, component): any {
        return this.handlePostAPIxmlold(this.hostold + "/VeryfiSMS", data, component);
    }

    MB_spOfficer_Login(data, component): any {
        return this.handlePostAPIxmlold(this.hostold + "/MB_spOfficer_Login", data, component);
    }
    Changepassword(data, component): any {
        return this.handlePostAPIxmlold(this.hostold + "/Changepassword", data, component);
    }
    //tracking 
    MBCTM_spLading_Cancel(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MBCTM_spLading_Cancel", data, component);
    }
    MB_spLading_Code(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Ladings/MB_spLading_Code", data, component);
    }
    ////////////////////////////////Báo phát thành công//////////////////////////////////
    MB_spLadingDeliveryMen_Success(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Deliveries/MB_spLadingDeliveryMen_Success", data, component);
    }
    ////////////////////////////////end Báo phát thành công//////////////////////////////

    /////////////////////////////// Quản lý kiện hàng bay /////////////////////////////

    MB_spLGT_PackageNumber_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_PackageNumbers/MB_spLGT_PackageNumber_List", data, component);
    }

    LGT_spPackageNumberHistory_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_PackageNumbers/LGT_spPackageNumberHistory_Save", data, component);
    }
    MB_SpCarhire_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_PackageNumbers/MB_SpCarhire_List", data, component);
    }
    MB_spCarhire_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_PackageNumbers/MB_spCarhire_Save", data, component);
    }
    LGT_PackageNumber_View(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_PackageNumbers/LGT_PackageNumber_View", data, component);
    }
    MB_SpLGT_tblVehicleLoad_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_PackageNumbers/MB_SpLGT_tblVehicleLoad_List", data, component);
    }
    LGT_spPackageNumber_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_PackageNumbers/LGT_spPackageNumber_Save", data, component);
    }
    LGT_spPackageNumber_ConfirmTo(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_PackageNumbers/LGT_spPackageNumber_ConfirmTo", data, component);
    }
    LGT_spPackageNumber_Check_PackageCode(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_PackageNumbers/LGT_spPackageNumber_Check_PackageCode", data, component);
    }
    ////////////////////////////// end  Quản lý kiện hàng bay   /////////////////////////////                

    //Get Warehouse import ID
    WH_spWarehouse_Import_GetID(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spWarehouse_Import_GetID", data, component);

    }

    //load list product by warehouse import code
    WH_spWarehouse_Import_LoadData(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spWarehouse_Import_LoadData", data, component);

    }

    //save warehouse export    
    WH_spWarehouse_Output_Save_MB(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spWarehouse_Output_Save_MB", data, component);
    }

    //Approve employee salary   
    HR_spSalary_Approve_MB(data, component): any {
        return this.handlePostAPIxml(this.host + "/SalaryManages/HR_spSalary_Approve_MB", data, component);
    }

    //Reject employee salary    
    HR_spSalary_Reject_MB(data, component): any {
        return this.handlePostAPIxml(this.host + "/SalaryManages/HR_spSalary_Reject_MB", data, component);
    }
    //Get all department by postId    
    HR_spDeparment_GetByPostId(data, component): any {
        return this.handlePostAPIxml(this.host + "/SalaryManages/HR_spDeparment_GetByPostId", data, component);
    }

    //Get all post office
    HR_spPostOffice_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/SalaryManages/HR_spPostOffice_Get", data, component);
    }

    //APP_spKPI_GetDetail_ByID
    APP_spKPI_GetDetail_ByID(data, component): any {
        return this.handlePostAPIxml(this.host + "/KPI_Pers/APP_spKPI_GetDetail_ByID", data, component);
    }

    //APP_spKPI_GetTotal_ByID
    APP_spKPI_GetTotal_ByID(data, component): any {
        return this.handlePostAPIxml(this.host + "/KPI_Pers/APP_spKPI_GetTotal_ByID", data, component);
    }

    //APP_spKPI_Transfer
    APP_spKPI_Transfer_MB(data, component): any {
        return this.handlePostAPIxml(this.host + "/KPI_Pers/APP_spKPI_Transfer_MB", data, component);
    }

    //APP_spKPI_Save
    APP_spKPI_Save_MB(data, component): any {
        return this.handlePostAPIxml(this.host + "/KPI_Pers/APP_spKPI_Save_MB", data, component);
    }

    //load list salary of employee
    HR_spSalary_Approve_LoadData(data, component): any {
        return this.handlePostAPIxml(this.host + "/SalaryManages/HR_spSalary_Approve_LoadData", data, component);
    }

    //save warehouse import    
    WH_spWarehouse_Import_Save_MB(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spWarehouse_Import_Save_MB", data, component);
    }

    //delete product in product list of warehouse export
    WH_spWarehouse_Output_Delete_MB(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spWarehouse_Output_Delete_MB", data, component);
    }

    //delete product in product list of warehouse import
    WH_spWarehouse_Import_Delete_MB(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spWarehouse_Import_Delete_MB", data, component);
    }


    //get combo warehouse vehicle
    WH_spGetcboWH_VehicleId(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spGetcboWH_VehicleId", data, component);
    }



    //Get product theo mã sản phẩm
    WH_spGetProductById(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spGetProductById", data, component);
    }

    //Get combo sản phẩm chuyển kho theo mã khách hàng & mã kho & mã lô    
    WH_spGetcboProductId(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spGetcboProductId", data, component);
    }

    //get combo warehouse area detail by customerId & warehouseAreaId
    WH_spGetcboWareHouseAreaDetailId_ByWareHouseAreaId(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spGetcboWareHouseAreaDetailId_ByWareHouseAreaId", data, component);
    }

    //get combo warehouse area by customerId & warehouseId
    WH_spGetcboWareHouseAreaId_ByWareHouseId(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spGetcboWareHouseAreaId_ByWareHouseId", data, component);
    }

    //get combo warehouse by customerId
    WH_spGetcboWareHouseId_ByCustomerId(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spGetcboWareHouseId_ByCustomerId", data, component);
    }

    //Load dữ liệu xuất kho theo mã phiếu xuất
    WH_spWarehouse_Output_LoadData(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spWarehouse_Output_LoadData", data, component);
    }

    //Load dữ liệu xuất kho theo mã phiếu xuất
    WH_spWarehouse_Output_GetID(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spWarehouse_Output_GetID", data, component);
    }

    //Load dữ liệu chuyển kho theo mã phiếu chuyển
    WH_spWarehouse_Tranport_LoadData(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spWarehouse_Tranport_LoadData", data, component);
    }

    //get combo customer
    WH_spGetcboCustomerId(data, component): any {
        return this.handlePostAPIxml(this.host + "/WH_WarehouseManages/WH_spGetcboCustomerId", data, component);
    }

    //get địa chỉ
    MB_spLocation_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Locations/MB_spLocation_Get", data, component);
    }
    //check giá
    Price(data, component): any {
        return this.handlePostAPIxmlold(this.hostold + "Price", data, component);
    }

    //save biên bản bàn giao
    MB_spHR_tblProtocolDriver_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Protocols/MB_spHR_tblProtocolDriver_Save", data, component);
    }
    //Get câu hỏi 
    MB_spHR_tblProtocolDriverCategory_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Protocols/MB_spHR_tblProtocolDriverCategory_Get", data, component);
    }
    MB_spProtocol_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Protocols/MB_spProtocol_Get", data, component);
    }

    MB_spProtocolDetail_Suport_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Protocols/MB_spProtocolDetail_Suport_Get", data, component);
    }

    MB_spProtocolDetail_Bill_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Protocols/MB_spProtocolDetail_Bill_Get", data, component);
    }

    MB_spProtocolDetail_Detail_Get(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Protocols/MB_spProtocolDetail_Detail_Get", data, component);
    }

    APP_spGetEmp_cbo(data, component): any {
        return this.handlePostAPIxmlold(this.host + "/KPI_Pers/APP_spGetEmp_cbo", data, component);
    }

    HR_spLeave_GetLeaveNum(data, component): any {
        return this.handlePostAPIxmlold(this.host + "/Take_Leaves/HR_spLeave_GetLeaveNum", data, component);
    }

    HR_spLeave_Regis_LoadData(data, component): any {
        return this.handlePostAPIxmlold(this.host + "/Take_Leaves/HR_spLeave_Regis_LoadData", data, component);
    }

    //MB_spSalary
    MB_spSalaryDetail(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Salaries/MB_spSalaryDetail", data, component);
    }
    MB_spSalaryDetail_Setup(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Salaries/MB_spSalaryDetail_Setup", data, component);
    }
    MB_spSalaryComplain(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Salaries/MB_spSalaryComplain", data, component);
    }
    MB_spOfficerReviewCheck(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Salaries/MB_spOfficerReviewCheck", data, component);
    }
    MB_spOfficerReviewAnswer(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Salaries/MB_spOfficerReviewAnswer", data, component);
    }
    MB_spOfficerReviewPoint(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Salaries/MB_spOfficerReviewPoint", data, component);
    }
    MB_spOfficerReview(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Salaries/MB_spOfficerReview", data, component);
    }

    //Quản lý biên bản
    HR_tblProtocolDriver_List(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Protocols/HR_tblProtocolDriver_List", data, component);
    }
    MB_spProtocolDriverList(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Protocols/MB_spProtocolDriverList", data, component);
    }
    MB_spProtocolDriverConfirm(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Protocols/MB_spProtocolDriverConfirm", data, component);
    }
    MB_spProtocolDriverDelete(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Protocols/MB_spProtocolDriverDelete", data, component);
    }
    ////////////tao mowi chuyen xe/////////////////
    MB_Carhire_Save(data, component): any {
        return this.handlePostAPIxml(this.host + "/MB_Carhire_Saves/LGT_spCarhire_Save", data, component);
    }
    ////////////end tao mowi chuyen xe/////////////
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    //Get id from login
    GetIdFromLogin() {
        let co: CookieService = new CookieService();
        var id = co.getCookie('id');
        return id
    }
    GetnameFromLogin() {
        let co: CookieService = new CookieService();
        var id = co.getCookie('name');
        return id
    }
    //Get id from login
    logout() {
        let co: CookieService = new CookieService();
        co.deleteCookie('id');
        co.deleteCookie('name');
    }
    private baseUrl = 'http://customermobile.netco.com.vn/';
    private isOnline = false;

    onlineCheck() {
        var _thisa = this;
        let options = new RequestOptions({ headers: this.headers });
        return new Promise((resolve, reject) => {
            this.http.get('http://115.84.182.231:8976/api/v3/Lading/Checkinternet')
                .toPromise()
                .then(function (response) {
                    _thisa.isOnline = true;

                })
                .catch(function (err) {
                    _thisa.router.navigate(['/error'])


                });
        });
    }

    // public source = new BehaviorSubject<any>(' ');
    // data = this.source.asObservable();
    // update(values: any) {
    //     this.source.next(values);
    // }
    //region accountlogin get token

    //#region Handle 
    public handleAPI(URL, data) {

        let options = new RequestOptions({ headers: this.headers });
        return new Promise((resolve, reject) => {
            this.http.get(URL)
                .toPromise()
                .then(function (response) {
                    setTimeout(function () {
                    }, 500);

                })
                .catch(function (err) {
                    setTimeout(function () {
                    }, 500);

                });
        });
    };

    //form-data
    public handlePostAPIform(URL, data, component) {
        let body = 'filter=' + data;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
        return new Promise((resolve, reject) => {
            this.http.post(URL, body, options)
                .toPromise()
                .then(function (response) {
                    setTimeout(function () {
                        // $('.loading').fadeOut();
                    }, 500);
                    resolve({ response, component });
                })
                .catch(function (err) {
                    setTimeout(function () {
                        // $('.loading').fadeOut();
                    }, 500);
                    reject({ err, component });
                });
        });
    };
    public handlePostAPIxmlold(URL, data, component) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
        return new Promise((resolve, reject) => {
            this.http.post(URL, data, options)
                .toPromise()
                .then(function (response) {
                    setTimeout(function () {
                        // $('.loading').fadeOut();
                    }, 500);
                    resolve({ response, component });
                })
                .catch(function (err) {
                    setTimeout(function () {
                        // $('.loading').fadeOut();
                    }, 500);
                    reject({ err, component });
                });
        });
    };
    //application/x-www-form-urlencoded
    public handlePostAPIxml(URL, data, component) {
        this.onlineCheck();
        var OfficerId = this.GetIdFromLogin();
        if (OfficerId == "" || OfficerId == null)
            this.router.navigate(['/index'])
        // this.onlineCheck();
        let body = new URLSearchParams();
        data = data.replace(/'/g, "");
        let para = data.split("&");
        for (var i = 0; i < para.length; i++) {
            body.set(para[i].split("=")[0], para[i].split("=")[1]);
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
        return new Promise((resolve, reject) => {
            this.http.post(URL, body.toString(), options)
                .toPromise()
                .then(function (response) {
                    setTimeout(function () {
                        // $('.loading').fadeOut();
                    }, 500);
                    resolve({ response, component });
                })
                .catch(function (err) {
                    setTimeout(function () {
                        // $('.loading').fadeOut();
                    }, 500);
                    reject({ err, component });
                });
        });
    };
    //post json
    public handlePostAPI(URL, data, component) {
        console.log("a")
        let headers = new Headers({
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "true"

        });
        let options = new RequestOptions({
            headers: headers
        });
        return new Promise((resolve, reject) => {
            this.http.post(URL, data, options)
                .toPromise()
                .then(function (response) {
                    setTimeout(function () {
                        // $('.loading').fadeOut();
                    }, 500);
                    resolve({ response, component });
                })
                .catch(function (err) {
                    setTimeout(function () {
                        // $('.loading').fadeOut();
                    }, 500);
                    reject({ err, component });
                });
        });
    };
    //#endregion

}
