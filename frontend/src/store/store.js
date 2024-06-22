import { configureStore} from "@reduxjs/toolkit"
/* Global Reducers */
import langReducer from "../reducers/global-reducers/lang";
import notificationsReducer from "../reducers/global-reducers/notifications";
import userReducer from "../reducers/global-reducers/user"
/* Client-Dashboard */
//users view
import usersDataReducer from "../reducers/client-dashboard/users/usersData";
import usersEditModalReducer from "../reducers/client-dashboard/users/usersEditModal";
import addUserModalReducer from "../reducers/client-dashboard/users/addUserModal"
import usersDeleteModalReducer from "../reducers/client-dashboard/users/usersDeleteModal";
//contacts view
import contactsDataReducer from "../reducers/client-dashboard/contacts/contactsData";
import contactsEditModalReducer from "../reducers/client-dashboard/contacts/contactsEditModal";
import contactsDeleteModalReducer from "../reducers/client-dashboard/contacts/contactsDeleteModal";
import addContactModalReducer from "../reducers/client-dashboard/contacts/addContactModal";
//client dashboard 
import todosDataReducer from "../reducers/client-dashboard/client-dashboard/todosData";
import addTodosModalReducer from "../reducers/client-dashboard/client-dashboard/addTodoModal";
//campaigns
import createdCampaignReducer from "../reducers/client-dashboard/campaigns/createdCampaign";
//common
import scheduleModalReducer from "../reducers/client-dashboard/common/scheduleModal";
import targetAudienceModalReducer from "../reducers/client-dashboard/common/targetAudienceModal";


export default configureStore({
    reducer:{
        /*Global Reducers*/
        lang: langReducer,
        notifications: notificationsReducer,
        user: userReducer,
        /* Client-Dashboard*/
        /*users view*/
        usersData: usersDataReducer,
        usersEditModal: usersEditModalReducer,
        addUserModal: addUserModalReducer,
        usersDeleteModal: usersDeleteModalReducer,
        /*contacts view */
        contactsData: contactsDataReducer,
        contactsEditModal: contactsEditModalReducer,
        contactsDeleteModal: contactsDeleteModalReducer,
        addContactModal: addContactModalReducer ,
        /*client-dashboard*/
        todosData: todosDataReducer,
        addTodosModal: addTodosModalReducer,
        /*campaigns*/
        createdCampaign: createdCampaignReducer,
        /*Common*/
        scheduleModal: scheduleModalReducer,
        targetAudienceModal: targetAudienceModalReducer

    }
});