import { IgrIconButton, IgrNavbar, IgrNavDrawer, IgrNavDrawerItem, IgrRipple } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';
import '/src/app/base-view-styles.css';

export default function App() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <div className={classes("row-layout group")}>
          <div onClick={() => navDrawer?.current?.toggle()} className={classes("row-layout group_1")}>
            <span className={classes("material-icons icon")}>
              <span>menu</span>
            </span>
          </div>
          <IgrNavbar className={classes("navbar")}>
            <div className={classes("row-layout group_2")}>
              <img src="/src/assets/CRM%20Logo.svg" className={classes("image")} />
            </div>
            <div style={{ display: 'contents' }} slot="end">
              <IgrIconButton variant="flat" className={classes("icon-button")}>
                <span className={classes("material-icons icon_1")}>
                  <span>search</span>
                </span>
                <IgrRipple></IgrRipple>
              </IgrIconButton>
            </div>
            <div style={{ display: 'contents' }} slot="end">
              <IgrIconButton variant="flat" className={classes("icon-button")}>
                <span className={classes("material-icons icon_1")}>
                  <span>settings</span>
                </span>
                <IgrRipple></IgrRipple>
              </IgrIconButton>
            </div>
            <div style={{ display: 'contents' }} slot="end">
              <IgrIconButton variant="flat" className={classes("icon-button")}>
                <span className={classes("material-icons icon_1")}>
                  <span>notifications_none</span>
                </span>
                <IgrRipple></IgrRipple>
              </IgrIconButton>
            </div>
          </IgrNavbar>
        </div>
        <div className={classes("row-layout group_3")}>
          <IgrNavDrawer open={true} position="relative" ref={navDrawer} className={classes("nav-drawer")}>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/home`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon_2")}>
                    <span>dashboard</span>
                  </span>
                  <IgrRipple></IgrRipple>
                </span>
                <div slot="content">Dashboard</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/customers`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon_2")}>
                    <span>people_outline</span>
                  </span>
                  <IgrRipple></IgrRipple>
                </span>
                <div slot="content">Customers</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/deals`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon_2")}>
                    <span>work_outline</span>
                  </span>
                  <IgrRipple></IgrRipple>
                </span>
                <div slot="content">Deals</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/reports`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon_2")}>
                    <span>bar_chart</span>
                  </span>
                  <IgrRipple></IgrRipple>
                </span>
                <div slot="content">Reports</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/support`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon_2")}>
                    <span>help_outline</span>
                  </span>
                  <IgrRipple></IgrRipple>
                </span>
                <div slot="content">Support</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/calendar`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon_2")}>
                    <span>calendar_month</span>
                  </span>
                  <IgrRipple></IgrRipple>
                </span>
                <div slot="content">Calendar</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/tasks`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon_2")}>
                    <span>task_alt</span>
                  </span>
                  <IgrRipple></IgrRipple>
                </span>
                <div slot="content">Tasks</div>
              </IgrNavDrawerItem>
            </div>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
