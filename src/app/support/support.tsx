import { IgrAvatar, IgrButton, IgrCard, IgrCardContent, IgrCardHeader, IgrRipple } from 'igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule, IgrPieChart, IgrPieChartModule } from 'igniteui-react-charts';
import { IgrColumn, IgrGrid } from 'igniteui-react-grids';
import { useGetBoxOfficeRevenue, useGetSales } from '../hooks/financial-hooks';
import { useGetSupportTicketsList } from '../hooks/crmaigenerated-data-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './support.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrCategoryChartModule.register();
IgrPieChartModule.register();

export default function Support() {
  const classes = createClassTransformer(styles);
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();
  const { financialSales } = useGetSales();
  const { cRMAIGeneratedDataSupportTickets } = useGetSupportTicketsList();

  return (
    <>
      <div className={classes("row-layout support-container")}>
        <div className={classes("column-layout page-container")}>
          <div className={classes("column-layout page-header")}>
            <div className={classes("row-layout header")}>
              <div className={classes("row-layout page-title")}>
                <span className={classes("material-icons icon")}>
                  <span>support_agent</span>
                </span>
                <h5 className={classes("content")}>
                  <span>Help &amp; Support</span>
                </h5>
              </div>
              <IgrButton disabled={true} type="button" className={classes("button")}>
                <span className={classes("material-icons")}>
                  <span>add</span>
                </span>
                <span>New Ticket</span>
                <IgrRipple></IgrRipple>
              </IgrButton>
            </div>
          </div>
          <div className={classes("row-layout group")}>
            <div className={classes("row-layout metrics")}>
              <IgrCard className={classes("card")}>
                <IgrCardHeader>
                  <div slot="thumbnail">
                    <IgrAvatar shape="circle" className={classes("avatar")}>
                      <span className={classes("material-icons icon_1")}>
                        <span>headset</span>
                      </span>
                    </IgrAvatar>
                  </div>
                  <h3 slot="title">
                    <span>Total Tickets</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span></span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout group_1")}>
                    <h3 className={classes("h3")}>
                      <span>24</span>
                    </h3>
                    <div className={classes("row-layout group_2")}>
                      <p className={classes("typography__subtitle-2 text")}>
                        <span>+5%</span>
                      </p>
                      <p className={classes("typography__body-2 content")}>
                        <span>from last month</span>
                      </p>
                    </div>
                  </div>
                </IgrCardContent>
              </IgrCard>
              <IgrCard className={classes("card")}>
                <IgrCardHeader>
                  <div slot="thumbnail">
                    <IgrAvatar shape="circle" className={classes("avatar_1")}>
                      <span className={classes("material-icons icon_1")}>
                        <span>access_time</span>
                      </span>
                    </IgrAvatar>
                  </div>
                  <h3 slot="title">
                    <span>Open Tickets</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span></span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout group_1")}>
                    <h3 className={classes("h3")}>
                      <span>14</span>
                    </h3>
                    <div className={classes("row-layout group_2")}>
                      <p className={classes("typography__subtitle-2 text")}>
                        <span>+3%</span>
                      </p>
                      <p className={classes("typography__body-2 content")}>
                        <span>from last month</span>
                      </p>
                    </div>
                  </div>
                </IgrCardContent>
              </IgrCard>
              <IgrCard className={classes("card")}>
                <IgrCardHeader>
                  <div slot="thumbnail">
                    <IgrAvatar shape="circle" className={classes("avatar_2")}>
                      <span className={classes("material-icons icon_1")}>
                        <span>task_alt</span>
                      </span>
                    </IgrAvatar>
                  </div>
                  <h3 slot="title">
                    <span>Resolved Tickets</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span></span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout group_1")}>
                    <h3 className={classes("h3")}>
                      <span>10</span>
                    </h3>
                    <div className={classes("row-layout group_2")}>
                      <p className={classes("typography__subtitle-2 text_1")}>
                        <span>-15%</span>
                      </p>
                      <p className={classes("typography__body-2 content")}>
                        <span>from last month</span>
                      </p>
                    </div>
                  </div>
                </IgrCardContent>
              </IgrCard>
              <IgrCard className={classes("card")}>
                <IgrCardHeader>
                  <div slot="thumbnail">
                    <IgrAvatar shape="circle" className={classes("avatar_3")}>
                      <span className={classes("material-icons icon_1")}>
                        <span>av_timer</span>
                      </span>
                    </IgrAvatar>
                  </div>
                  <h3 slot="title">
                    <span>Avg. Resolution Time</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span></span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout group_1")}>
                    <h3 className={classes("h3")}>
                      <span>1.5 days</span>
                    </h3>
                    <div className={classes("row-layout group_2")}>
                      <p className={classes("typography__subtitle-2 text")}>
                        <span>+0.5%</span>
                      </p>
                      <p className={classes("typography__body-2 content")}>
                        <span>from last month</span>
                      </p>
                    </div>
                  </div>
                </IgrCardContent>
              </IgrCard>
            </div>
            <div className={classes("column-layout group_3")}>
              <div className={classes("row-layout group_4")}>
                <div className={classes("column-layout group_5")}>
                  <p className={classes("typography__body-1 content")}>
                    <span>Tickets by Priority</span>
                  </p>
                  <div className={classes("group_6")}>
                    <IgrPieChart dataSource={financialBoxOfficeRevenue} labelMemberPath="Franchise" valueMemberPath="TotalWorldBoxOfficeRevenue"></IgrPieChart>
                  </div>
                </div>
                <div className={classes("column-layout group_5")}>
                  <p className={classes("typography__body-1 content")}>
                    <span>Ticket Trend</span>
                  </p>
                  <div className={classes("group_7")}>
                    <IgrCategoryChart dataSource={financialSales} chartType="Spline" initialGroups="Country" initialSummaries="SUM(Profit), SUM(Sales)" groupSorts="Country asc" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                  </div>
                </div>
              </div>
              <div className={classes("column-layout group_8")}>
                <p className={classes("typography__body-1 content")}>
                  <span>All Support Tickets</span>
                </p>
                <IgrGrid data={cRMAIGeneratedDataSupportTickets} primaryKey="TicketNumber" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                  <IgrColumn field="TicketNumber" dataType="string" header="TicketNumber" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="Subject" dataType="string" header="Subject" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="Customer" dataType="string" header="Customer" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="Status" dataType="string" header="Status" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="Priority" dataType="string" header="Priority" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="Updated" dataType="date" header="Updated" sortable={true} selectable={false}></IgrColumn>
                </IgrGrid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
