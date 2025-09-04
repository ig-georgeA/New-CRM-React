import { IgrAvatar, IgrButton, IgrCard, IgrCardContent, IgrCardHeader, IgrChip, IgrList, IgrListItem, IgrRipple } from 'igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';
import { useNavigate } from 'react-router-dom';
import { useGetCustomerDtoList } from '../hooks/northwind-swagger-hooks';
import { useGetMeetingsTasksList } from '../hooks/crmapp-hooks';
import { useGetSales } from '../hooks/financial-hooks';
import styles from './home.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrCategoryChartModule.register();

export default function Home() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const { financialSales } = useGetSales();
  const { northwindSwaggerCustomerDto } = useGetCustomerDtoList();
  const { cRMAppMeetingsTasks } = useGetMeetingsTasksList();

  return (
    <>
      <div className={classes("row-layout home-container")}>
        <div className={classes("column-layout page-container")}>
          <div className={classes("column-layout group")}>
            <div className={classes("row-layout header")}>
              <div className={classes("row-layout page-title")}>
                <span className={classes("material-icons icon")}>
                  <span>dashboard</span>
                </span>
                <h5 className={classes("content")}>
                  <span>CRM Dashboard</span>
                </h5>
              </div>
            </div>
          </div>
          <div className={classes("row-layout metrics")}>
            <IgrCard className={classes("card")}>
              <IgrCardHeader>
                <div slot="thumbnail">
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons icon_1")}>
                      <span>attach_money</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Total Revenue</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout group_1")}>
                  <h3 className={classes("h3")}>
                    <span>$250,000</span>
                  </h3>
                  <div className={classes("row-layout group_2")}>
                    <p className={classes("typography__subtitle-2 text")}>
                      <span>+15%</span>
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
                    <span className={classes("imx-icon imx-scales-balanced icon_1")}></span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Avg. Deal Value</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout group_1")}>
                  <h3 className={classes("h3")}>
                    <span>$5,000</span>
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
                  <IgrAvatar shape="circle" className={classes("avatar_3")}>
                    <span className={classes("material-icons icon_1")}>
                      <span>person_add_alt</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>New Leads</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout group_1")}>
                  <h3 className={classes("h3")}>
                    <span>3</span>
                  </h3>
                  <div className={classes("row-layout group_2")}>
                    <p className={classes("typography__subtitle-2 text")}>
                      <span>+23%</span>
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
                  <IgrAvatar shape="circle" className={classes("avatar_4")}>
                    <span className={classes("material-icons icon_1")}>
                      <span>people_outline</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Total Customers</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout group_1")}>
                  <h3 className={classes("h3")}>
                    <span>80</span>
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
            <IgrCard className={classes("card")}>
              <IgrCardHeader>
                <div slot="thumbnail">
                  <IgrAvatar shape="circle" className={classes("avatar_5")}>
                    <span className={classes("material-icons icon_1")}>
                      <span>support_agent</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Open Support Tickets</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout group_1")}>
                  <h3 className={classes("h3")}>
                    <span>2</span>
                  </h3>
                  <div className={classes("row-layout group_2")}>
                    <p className={classes("typography__subtitle-2 text_1")}>
                      <span>-10%</span>
                    </p>
                    <p className={classes("typography__body-2 content")}>
                      <span>from last month</span>
                    </p>
                  </div>
                </div>
              </IgrCardContent>
            </IgrCard>
          </div>
          <div className={classes("row-layout sections")}>
            <div className={classes("column-layout group_3")}>
              <div className={classes("column-layout group_4")}>
                <div className={classes("row-layout group_5")}>
                  <p className={classes("typography__body-1 content")}>
                    <span>Quarterly Performance</span>
                  </p>
                  <IgrButton variant="flat" type="button" onClick={() => navigate(`/reports`)} className={classes("button")}>
                    <span>View all</span>
                    <span className={classes("material-icons")}>
                      <span>arrow_forward</span>
                    </span>
                    <IgrRipple></IgrRipple>
                  </IgrButton>
                </div>
                <div className={classes("group_6")}>
                  <IgrCategoryChart dataSource={financialSales} chartType="Column" initialGroups="Country" initialSummaries="SUM(Sales)" groupSorts="Country asc" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                </div>
              </div>
              <div className={classes("row-layout group_7")}>
                <div className={classes("column-layout group_8")}>
                  <div onClick={() => navigate(`/customers`)} className={classes("row-layout group_5")}>
                    <p className={classes("typography__body-1 content")}>
                      <span>New Accounts</span>
                    </p>
                    <IgrButton variant="flat" type="button" onClick={() => navigate(`/customers`)} className={classes("button")}>
                      <span>View all</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_forward</span>
                      </span>
                      <IgrRipple></IgrRipple>
                    </IgrButton>
                  </div>
                  <div className={classes("column-layout group_9")}>
                    <IgrList className={classes("list")}>
                      {northwindSwaggerCustomerDto?.map((item) => (
                        <IgrListItem key={uuid()}>
                          <div slot="start">
                            <IgrAvatar shape="rounded" className={classes("avatar_1 avatar_1_1")}>
                              <span className={classes("material-icons icon_2")}>
                                <span>business</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div>
                            <div className={classes("row-layout group_10")}>
                              <div className={classes("column-layout group_11")}>
                                <a onClick={() => navigate(`/customer-details/AROUT`)} className={classes("typography__body-2 hyperlink")}>
                                  <span>{item.companyName}</span>
                                </a>
                                <p className={classes("typography__caption text_2")}>
                                  <span>{item.customerId}</span>
                                </p>
                              </div>
                              <p className={classes("typography__body-2 text_2")}>
                                <span>{item.address?.country}</span>
                              </p>
                            </div>
                          </div>
                        </IgrListItem>
                      ))}
                    </IgrList>
                  </div>
                </div>
                <div className={classes("column-layout group_8")}>
                  <div className={classes("row-layout group_5")}>
                    <p className={classes("typography__body-1 content")}>
                      <span>Frequently contacted</span>
                    </p>
                    <IgrButton variant="flat" type="button" onClick={() => navigate(`/customers`)} className={classes("button")}>
                      <span>View all</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_forward</span>
                      </span>
                      <IgrRipple></IgrRipple>
                    </IgrButton>
                  </div>
                  <div className={classes("column-layout group_9")}>
                    <IgrList className={classes("list")}>
                      {northwindSwaggerCustomerDto?.map(() => (
                        <IgrListItem key={uuid()}>
                          <div slot="start">
                            <IgrAvatar shape="rounded" className={classes("avatar_1 avatar_1_2")}>
                              <span className={classes("material-icons icon_3")}>
                                <span>perm_identity</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div>
                            <div className={classes("row-layout group_10")}>
                              <div className={classes("column-layout group_11")}>
                                <p className={classes("typography__subtitle-2 text_3")}>
                                  <span></span>
                                </p>
                                <p className={classes("typography__caption text_2")}>
                                  <span></span>
                                </p>
                              </div>
                              <IgrChip className={classes("chip")}>
                                <span slot="prefix">
                                  <span className={classes("material-icons icon_4")}>
                                    <span>phone</span>
                                  </span>
                                </span>
                                <span></span>
                              </IgrChip>
                            </div>
                          </div>
                        </IgrListItem>
                      ))}
                    </IgrList>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes("column-layout group_12")}>
              <div className={classes("column-layout group_4")}>
                <div className={classes("row-layout group_5")}>
                  <p className={classes("typography__body-1 content")}>
                    <span>My Meetings</span>
                  </p>
                  <IgrButton variant="flat" type="button" onClick={() => navigate(`/calendar`)} className={classes("button")}>
                    <span>View all</span>
                    <span className={classes("material-icons")}>
                      <span>arrow_forward</span>
                    </span>
                    <IgrRipple></IgrRipple>
                  </IgrButton>
                </div>
                <IgrList className={classes("list")}>
                  {cRMAppMeetingsTasks?.map(() => (
                    <IgrListItem key={uuid()}>
                      <div slot="start">
                        <IgrAvatar shape="rounded" className={classes("avatar_1 avatar_1_3")}>
                          <span className={classes("material-icons icon_5")}>
                            <span>calendar_month</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div>
                        <div className={classes("row-layout group_13")}>
                          <div className={classes("column-layout group_11")}>
                            <div className={classes("row-layout group_14")}>
                              <p className={classes("typography__subtitle-2 text_3")}>
                                <span>Meeting with </span>
                              </p>
                              <p className={classes("typography__subtitle-2 text_3")}>
                                <span></span>
                              </p>
                            </div>
                            <div className={classes("row-layout group_15")}>
                              <p className={classes("typography__caption text_2")}>
                                <span></span>
                              </p>
                              <p className={classes("typography__caption text_2")}>
                                <span>-</span>
                              </p>
                              <p className={classes("typography__caption text_2")}>
                                <span></span>
                              </p>
                            </div>
                          </div>
                          <IgrChip className={classes("chip_1")}>
                            <span></span>
                          </IgrChip>
                        </div>
                      </div>
                    </IgrListItem>
                  ))}
                </IgrList>
              </div>
              <div className={classes("column-layout group_4")}>
                <div className={classes("row-layout group_16")}>
                  <p className={classes("typography__body-1 content")}>
                    <span>Today’s Tasks</span>
                  </p>
                  <IgrButton variant="flat" type="button" onClick={() => navigate(`/tasks`)} className={classes("button")}>
                    <span>View all</span>
                    <span className={classes("material-icons")}>
                      <span>arrow_forward</span>
                    </span>
                    <IgrRipple></IgrRipple>
                  </IgrButton>
                </div>
                <IgrList className={classes("list")}>
                  {cRMAppMeetingsTasks?.map(() => (
                    <IgrListItem key={uuid()}>
                      <div slot="start">
                        <IgrAvatar shape="rounded" className={classes("avatar_1 avatar_1_4")}>
                          <span className={classes("material-icons icon_5")}>
                            <span>task_alt</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div>
                        <div className={classes("row-layout group_17")}>
                          <div className={classes("column-layout group_11")}>
                            <div className={classes("row-layout group_18")}>
                              <p className={classes("typography__subtitle-2 text_3")}>
                                <span></span>
                              </p>
                              <p className={classes("typography__subtitle-2 text_3")}>
                                <span>-</span>
                              </p>
                              <p className={classes("typography__subtitle-2 text_3")}>
                                <span></span>
                              </p>
                            </div>
                            <div className={classes("row-layout group_19")}>
                              <p className={classes("typography__caption text_2")}>
                                <span>Due by</span>
                              </p>
                              <p className={classes("typography__caption text_2")}>
                                <span></span>
                              </p>
                            </div>
                          </div>
                          <IgrChip className={classes("chip_1")}>
                            <span></span>
                          </IgrChip>
                        </div>
                      </div>
                    </IgrListItem>
                  ))}
                </IgrList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
