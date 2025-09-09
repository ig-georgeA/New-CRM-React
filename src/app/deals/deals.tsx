import { IgrAvatar, IgrButton, IgrButtonGroup, IgrCard, IgrCardContent, IgrCardHeader, IgrInput, IgrRipple, IgrSelect, IgrSelectItem, IgrToggleButton } from '@infragistics/igniteui-react';
import { useState } from 'react';
import styles from './deals.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Deals() {
  const classes = createClassTransformer(styles);
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string>('1');

  return (
    <>
      <div className={classes("row-layout deals-container")}>
        <div className={classes("column-layout page-container")}>
          <div className={classes("column-layout page-header")}>
            <div className={classes("row-layout header-1")}>
              <div className={classes("row-layout page-title-1")}>
                <span className={classes("material-icons icon")}>
                  <span>work_outline</span>
                </span>
                <h5 className={classes("content")}>
                  <span>Deals</span>
                </h5>
              </div>
              <IgrButton disabled={true} type="button" className={classes("button")}>
                <span className={classes("material-icons")}>
                  <span>add</span>
                </span>
                <span>New Deal</span>
                <IgrRipple></IgrRipple>
              </IgrButton>
            </div>
          </div>
          <div className={classes("row-layout metrics")}>
            <IgrCard className={classes("card")}>
              <IgrCardHeader>
                <div slot="thumbnail">
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons icon_1")}>
                      <span>handshake</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Total Deals</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout group")}>
                  <h3 className={classes("h3")}>
                    <span>11</span>
                  </h3>
                  <div className={classes("row-layout group_1")}>
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
                  <IgrAvatar shape="circle" className={classes("avatar_2")}>
                    <span className={classes("material-icons icon_1")}>
                      <span>access_time</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Open Deals</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout group")}>
                  <h3 className={classes("h3")}>
                    <span>8</span>
                  </h3>
                  <div className={classes("row-layout group_1")}>
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
                  <IgrAvatar shape="circle" className={classes("avatar_3")}>
                    <span className={classes("material-icons icon_1")}>
                      <span>attach_money</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Total Open Value</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout group")}>
                  <h3 className={classes("h3")}>
                    <span>$75,000</span>
                  </h3>
                  <div className={classes("row-layout group_1")}>
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
                  <IgrAvatar shape="circle" className={classes("avatar_4")}>
                    <span className={classes("material-icons icon_1")}>
                      <span>percent</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Deal Win Rate</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout group")}>
                  <h3 className={classes("h3")}>
                    <span>50%</span>
                  </h3>
                  <div className={classes("row-layout group_1")}>
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
          <div className={classes("column-layout group_2")}>
            <div className={classes("row-layout filters-and-sorting")}>
              <div className={classes("row-layout group_3")}>
                <IgrInput type="search" value={value ?? ""} placeholder="Search deals..." outlined={true} onChange={(e) => setValue(e.detail)} className={classes("user-input")}>
                  <span slot="prefix">
                    <span className={classes("material-icons icon_2")}>
                      <span>search</span>
                    </span>
                  </span>
                </IgrInput>
              </div>
              <div className={classes("row-layout group_4")}>
                <IgrSelect outlined={true} value={value1} onChange={(e) => setValue1(e.detail.value)} className={classes("user-input")}>
                  <IgrSelectItem value="1" key="16e28144-9b85-400d-90d5-1e4b809a988b">
                    <span>All statuses</span>
                  </IgrSelectItem>
                  <IgrSelectItem value="2" key="b4996e24-e7a2-478d-9613-aa25b3b50f08">
                    <span>Qualified</span>
                  </IgrSelectItem>
                  <IgrSelectItem value="4" key="09f91e51-314c-4568-8605-d13deaaf3449">
                    <span>Proposal</span>
                  </IgrSelectItem>
                  <IgrSelectItem value="5" key="7703ea2b-ffe6-4bd8-8ea1-a7bb8c4bc8f6">
                    <span>Negotiation</span>
                  </IgrSelectItem>
                  <IgrSelectItem value="6" key="4c68df8d-d989-4d0a-a5c4-fd9e4cb8c349">
                    <span>Closed Won</span>
                  </IgrSelectItem>
                  <IgrSelectItem value="7" key="c7de7128-c392-4720-8c15-f637ecf5bd35">
                    <span>Closed Lost</span>
                  </IgrSelectItem>
                </IgrSelect>
                <IgrButtonGroup className={classes("button-group")}>
                  <IgrToggleButton>
                    <span className={classes("material-icons")}>
                      <span>grid_on</span>
                    </span>
                    <IgrRipple></IgrRipple>
                  </IgrToggleButton>
                  <IgrToggleButton disabled={true}>
                    <span className={classes("material-icons")}>
                      <span>format_list_bulleted</span>
                    </span>
                    <IgrRipple></IgrRipple>
                  </IgrToggleButton>
                </IgrButtonGroup>
              </div>
            </div>
            <div className={classes("row-layout kanban-view")}>
              <div className={classes("column-layout kanban-column")}>
                <div className={classes("row-layout group_5")}>
                  <div className={classes("row-layout group_6")}>
                    <div className={classes("column-layout group_7")}>
                      <h6 className={classes("content_2")}>
                        <span>Qualified</span>
                      </h6>
                      <div className={classes("row-layout group_8")}>
                        <p className={classes("typography__subtitle-2 content_2")}>
                          <span>Total Value</span>
                        </p>
                        <p className={classes("typography__subtitle-2 content_2")}>
                          <span>$23,000</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <IgrAvatar initials="3" shape="circle" className={classes("avatar_1 avatar_1_1")}></IgrAvatar>
                </div>
                <div className={classes("column-layout group_9")}>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Consulting Engagement</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Healthcare Provider</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6")}>
                          <span>$8,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jane Smith</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jun 11, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Hardware Purchase</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Acme Corp</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6")}>
                          <span>$6,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>John Doe</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jun 11, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Client Onboarding</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Tech Corp</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6")}>
                          <span>$9,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>Peter Jones</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jun 10, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                  <IgrButton variant="flat" type="button" className={classes("button_1")}>
                    <span className={classes("material-icons")}>
                      <span>add</span>
                    </span>
                    <span>New</span>
                    <IgrRipple></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <div className={classes("column-layout kanban-column-1")}>
                <div className={classes("row-layout group_11")}>
                  <div className={classes("row-layout group_6")}>
                    <div className={classes("column-layout group_7")}>
                      <h6 className={classes("content_2")}>
                        <span>Proposal Sent</span>
                      </h6>
                      <div className={classes("row-layout group_8")}>
                        <p className={classes("typography__subtitle-2 content_2")}>
                          <span>Total Value</span>
                        </p>
                        <p className={classes("typography__subtitle-2 content_2")}>
                          <span>$14,000</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <IgrAvatar initials="2" shape="circle" className={classes("avatar_1 avatar_1_2")}></IgrAvatar>
                </div>
                <div className={classes("column-layout group_9")}>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Service Upgrade</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Healthy Living</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6")}>
                          <span>$4,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>Peter Jones</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jun 9, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Marketing Campaign</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Acme Corp</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6")}>
                          <span>$10,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>John Doe</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jun 8, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                </div>
              </div>
              <div className={classes("column-layout kanban-column-1")}>
                <div className={classes("row-layout group_12")}>
                  <div className={classes("row-layout group_6")}>
                    <div className={classes("column-layout group_7")}>
                      <h6 className={classes("content_2")}>
                        <span>Negotiation</span>
                      </h6>
                      <div className={classes("row-layout group_8")}>
                        <p className={classes("typography__subtitle-2 content_2")}>
                          <span>Total Value</span>
                        </p>
                        <p className={classes("typography__subtitle-2 content_2")}>
                          <span>$38,000</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <IgrAvatar initials="3" shape="circle" className={classes("avatar_1 avatar_1_3")}></IgrAvatar>
                </div>
                <div className={classes("column-layout group_9")}>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Software Integration</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Acme Bank</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6")}>
                          <span>$18,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>Sandy Anders</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jun 10, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Cloud Migration</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Giant Corp</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6")}>
                          <span>$13,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jane Smith</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jun 7, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Consulting Engagement</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Healthcare Provider</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6")}>
                          <span>$7,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>Peter Jones</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jun 5, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                </div>
              </div>
              <div className={classes("column-layout kanban-column-1")}>
                <div className={classes("row-layout group_13")}>
                  <div className={classes("row-layout group_6")}>
                    <div className={classes("column-layout group_7")}>
                      <h6 className={classes("content_2")}>
                        <span>Closed Won</span>
                      </h6>
                      <div className={classes("row-layout group_8")}>
                        <p className={classes("typography__subtitle-2 content_2")}>
                          <span>Total Value</span>
                        </p>
                        <p className={classes("typography__subtitle-2 content_2")}>
                          <span>$13,000</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <IgrAvatar initials="2" shape="circle" className={classes("avatar_1 avatar_1_4")}></IgrAvatar>
                </div>
                <div className={classes("column-layout group_9")}>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Client Onboarding</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Tech Corp</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6")}>
                          <span>$9,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jane Smith</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jun 1, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Software License</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Tech Co.</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6_1")}>
                          <span>$4,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>Peter Jones</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>May 25, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                </div>
              </div>
              <div className={classes("column-layout kanban-column-1")}>
                <div className={classes("row-layout group_14")}>
                  <div className={classes("row-layout group_6")}>
                    <div className={classes("column-layout group_7")}>
                      <h6 className={classes("content_2")}>
                        <span>Closed Lost</span>
                      </h6>
                      <div className={classes("row-layout group_8")}>
                        <p className={classes("typography__subtitle-2 content_2")}>
                          <span>Total Value</span>
                        </p>
                        <p className={classes("typography__subtitle-2 content_2")}>
                          <span>$6,000</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <IgrAvatar initials="1" shape="circle" className={classes("avatar_1 avatar_1_5")}></IgrAvatar>
                </div>
                <div className={classes("column-layout group_9")}>
                  <IgrCard className={classes("card_1")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Service Upgrade</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Retail Pro</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout group_7")}>
                        <h6 className={classes("h6_1")}>
                          <span>$6,000</span>
                        </h6>
                        <div className={classes("row-layout group_10")}>
                          <p className={classes("typography__body-2 content")}>
                            <span>Jane Smith</span>
                          </p>
                          <p className={classes("typography__body-2 content")}>
                            <span>May 20, 2025</span>
                          </p>
                        </div>
                      </div>
                    </IgrCardContent>
                  </IgrCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
