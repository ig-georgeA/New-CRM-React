import { IgrAccordion, IgrAvatar, IgrButton, IgrCheckbox, IgrChip, IgrExpansionPanel, IgrList, IgrListItem, IgrRipple, IgrTab, IgrTabs } from 'igniteui-react';
import { IgrColumn, IgrGrid } from 'igniteui-react-grids';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderDto } from '../models/NorthwindSwagger/order-dto';
import { useGetCustomerDto, useGetOrderDtoList, useGetProductDtoList } from '../hooks/northwind-swagger-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './customer-details.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function CustomerDetails() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const routeParams = useParams();
  const rCustomerID = routeParams.rCustomerID ?? 'AROUT';
  const __loaded = useRef<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderDto | undefined>();
  const { northwindSwaggerCustomerDto: selectedCustomer1 } = useGetCustomerDto(rCustomerID);
  const { northwindSwaggerOrderDto } = useGetOrderDtoList(rCustomerID);
  const { northwindSwaggerProductDto } = useGetProductDtoList(selectedOrder?.orderId ?? 0);

  useEffect(() => {
    if (!__loaded.current) {
      setSelectedOrder(undefined);
    }
  }, [selectedCustomer1]);

  useEffect(() => {
    __loaded.current = true;
    return () => {
      __loaded.current = false;
    }
  }, []);

  return (
    <>
      <div className={classes("column-layout customer-details-container")}>
        <div className={classes("column-layout page-container")}>
          <div className={classes("column-layout page-header")}>
            <IgrButton variant="flat" type="button" onClick={() => navigate(`/customers`)} className={classes("button")}>
              <span className={classes("material-icons")}>
                <span>arrow_back</span>
              </span>
              <span>Customers</span>
              <IgrRipple></IgrRipple>
            </IgrButton>
            <div className={classes("row-layout account-header-1")}>
              <div className={classes("row-layout page-title-1")}>
                <span className={classes("material-icons icon")}>
                  <span>people_outline</span>
                </span>
                <div className={classes("row-layout group")}>
                  <h5 className={classes("content")}>
                    <span>{selectedCustomer1?.companyName}</span>
                  </h5>
                  <p className={classes("typography__body-2 text")}>
                    <span>{selectedCustomer1?.customerId}</span>
                  </p>
                </div>
              </div>
              <div className={classes("row-layout group_1")}>
                <div className={classes("column-layout group_2")}>
                  <p className={classes("typography__subtitle-2 content")}>
                    <span>Primary Contact</span>
                  </p>
                  <p className={classes("typography__body-2 text")}>
                    <span>{selectedCustomer1?.contactName}</span>
                  </p>
                  <p className={classes("typography__body-2 text")}>
                    <span>{selectedCustomer1?.contactTitle}</span>
                  </p>
                </div>
                <div className={classes("column-layout group_2")}>
                  <p className={classes("typography__subtitle-2 content")}>
                    <span>Phone</span>
                  </p>
                  <p className={classes("typography__body-2 text")}>
                    <span>{selectedCustomer1?.address?.phone}</span>
                  </p>
                </div>
                <div className={classes("column-layout group_2")}>
                  <p className={classes("typography__subtitle-2 content")}>
                    <span>Billing Address</span>
                  </p>
                  <p className={classes("typography__body-2 text")}>
                    <span>{selectedCustomer1?.address?.street}</span>
                  </p>
                  <div className={classes("column-layout group_3")}>
                    <div className={classes("row-layout group_4")}>
                      <p className={classes("typography__body-2 text")}>
                        <span>{selectedCustomer1?.address?.city}</span>
                      </p>
                      <p className={classes("typography__body-2 text")}>
                        <span>{selectedCustomer1?.address?.country}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("row-layout page-content")}>
            <div className={classes("column-layout customer-details")}>
              <div className={classes("column-layout group_5")}>
                <IgrTabs className={classes("tabs")}>
                  <IgrTab selected={true} className={classes("tab-item")}>
                    <span slot="label">Orders</span>
                    <div className={classes("column-layout tab-item-content")}>
                      <IgrGrid data={northwindSwaggerOrderDto} primaryKey="orderId" rowSelection="single" allowFiltering={true} filterMode="excelStyleFilter" onRowSelectionChanging={(e) => setSelectedOrder(e.detail.newSelection[0])} className={classes("ig-typography ig-scrollbar grid")}>
                        <IgrColumn field="orderId" dataType="number" header="orderId" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="shipVia" dataType="string" header="shipVia" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="shipperId" dataType="number" header="shipperId" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="orderDate" dataType="date" header="orderDate" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="requiredDate" dataType="date" header="requiredDate" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="freight" dataType="number" header="freight" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="completed" dataType="boolean" header="completed" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="shipAddress.street" dataType="string" header="shipAddress street" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="shipAddress.city" dataType="string" header="shipAddress city" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="shipAddress.region" dataType="string" header="shipAddress region" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="shipAddress.postalCode" dataType="string" header="shipAddress postalCode" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="shipAddress.country" dataType="string" header="shipAddress country" groupable={true} sortable={true} selectable={false}></IgrColumn>
                        <IgrColumn field="shipAddress.phone" dataType="string" header="shipAddress phone" groupable={true} sortable={true} selectable={false}></IgrColumn>
                      </IgrGrid>
                      <div className={classes("column-layout group_6")}>
                        <div className={classes("row-layout group_7")}>
                          <p className={classes("typography__body-2 text_1")}>
                            <span>Selected order</span>
                          </p>
                          <p className={classes("typography__body-2 text_2")}>
                            <span>{selectedOrder?.orderId}</span>
                          </p>
                        </div>
                        <IgrGrid data={northwindSwaggerProductDto} primaryKey="productId" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                          <IgrColumn field="productId" dataType="number" header="productId" sortable={true} selectable={false}></IgrColumn>
                          <IgrColumn field="productName" dataType="string" header="productName" sortable={true} selectable={false}></IgrColumn>
                          <IgrColumn field="supplierId" dataType="number" header="supplierId" sortable={true} selectable={false}></IgrColumn>
                          <IgrColumn field="categoryId" dataType="number" header="categoryId" sortable={true} selectable={false}></IgrColumn>
                          <IgrColumn field="quantityPerUnit" dataType="string" header="quantityPerUnit" sortable={true} selectable={false}></IgrColumn>
                          <IgrColumn field="unitPrice" dataType="number" header="unitPrice" sortable={true} selectable={false}></IgrColumn>
                          <IgrColumn field="unitsInStock" dataType="number" header="unitsInStock" sortable={true} selectable={false}></IgrColumn>
                          <IgrColumn field="unitsOnOrder" dataType="number" header="unitsOnOrder" sortable={true} selectable={false}></IgrColumn>
                          <IgrColumn field="reorderLevel" dataType="number" header="reorderLevel" sortable={true} selectable={false}></IgrColumn>
                          <IgrColumn field="discontinued" dataType="boolean" header="discontinued" sortable={true} selectable={false}></IgrColumn>
                        </IgrGrid>
                      </div>
                    </div>
                  </IgrTab>
                  <IgrTab className={classes("tab-item")}>
                    <div className={classes("column-layout tab-item-content_1")}>
                      <div className={classes("row-layout buttons-1")}>
                        <IgrButton variant="outlined" type="button" className={classes("button_1")}>
                          <span className={classes("material-icons")}>
                            <span>person_add</span>
                          </span>
                          <span>Contact</span>
                          <IgrRipple></IgrRipple>
                        </IgrButton>
                        <IgrButton variant="outlined" type="button" className={classes("button_1")}>
                          <span className={classes("material-icons")}>
                            <span>star_border</span>
                          </span>
                          <span>New Opportunity</span>
                          <IgrRipple></IgrRipple>
                        </IgrButton>
                        <IgrButton variant="outlined" type="button" className={classes("button_1")}>
                          <span className={classes("material-icons")}>
                            <span>error_outline</span>
                          </span>
                          <span>New Case</span>
                          <IgrRipple></IgrRipple>
                        </IgrButton>
                        <IgrButton variant="outlined" type="button" className={classes("button_1")}>
                          <span className={classes("material-icons")}>
                            <span>note_add</span>
                          </span>
                          <span>Add note</span>
                          <IgrRipple></IgrRipple>
                        </IgrButton>
                        <IgrButton variant="outlined" type="button" className={classes("button_1")}>
                          <span className={classes("material-icons")}>
                            <span>file_copy</span>
                          </span>
                          <span>Add files</span>
                          <IgrRipple></IgrRipple>
                        </IgrButton>
                      </div>
                      <IgrAccordion singleExpand={true} className={classes("accordion")}>
                        <IgrExpansionPanel open={true} indicatorPosition="end">
                          <div className={classes("column-layout group_8")}>
                            <div className={classes("row-layout group_9")}>
                              <IgrAvatar initials="jl" shape="circle" className={classes("avatar avatar_1")}></IgrAvatar>
                              <a className={classes("typography__body-2 hyperlink")}>
                                <span>Janine Labrune</span>
                              </a>
                            </div>
                            <div className={classes("column-layout group_10")}>
                              <div className={classes("row-layout group_11")}>
                                <p className={classes("typography__subtitle-2 text_3")}>
                                  <span>Account Name:</span>
                                </p>
                                <p className={classes("typography__body-2 text")}>
                                  <span>Thomas Hardy</span>
                                </p>
                              </div>
                              <div className={classes("row-layout group_11")}>
                                <p className={classes("typography__subtitle-2 text_3")}>
                                  <span>Title:</span>
                                </p>
                                <p className={classes("typography__body-2 text")}>
                                  <span>Owner</span>
                                </p>
                              </div>
                              <div className={classes("row-layout group_12")}>
                                <p className={classes("typography__subtitle-2 text_3")}>
                                  <span>Direct:</span>
                                </p>
                                <IgrCheckbox className={classes("checkbox")}></IgrCheckbox>
                              </div>
                            </div>
                          </div>
                          <span slot="title">Related Contacts (1)</span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel indicatorPosition="end">
                          <div className={classes("column-layout group_8")}>
                            <div className={classes("row-layout group_9")}>
                              <IgrAvatar shape="rounded" className={classes("avatar avatar_2")}>
                                <span className={classes("material-icons icon_1")}>
                                  <span>business</span>
                                </span>
                              </IgrAvatar>
                              <a className={classes("typography__body-2 hyperlink_1")}>
                                <span>Around The Horn</span>
                              </a>
                            </div>
                            <div className={classes("column-layout group_10")}>
                              <div className={classes("row-layout group_11")}>
                                <p className={classes("typography__subtitle-2 text_3")}>
                                  <span>Stage:</span>
                                </p>
                                <p className={classes("typography__body-2 text")}>
                                  <span>Qualification</span>
                                </p>
                              </div>
                              <div className={classes("row-layout group_11")}>
                                <p className={classes("typography__subtitle-2 text_3")}>
                                  <span>Amount:</span>
                                </p>
                                <p className={classes("typography__body-2 text")}>
                                  <span>Owner</span>
                                </p>
                              </div>
                              <div className={classes("row-layout group_11")}>
                                <p className={classes("typography__subtitle-2 text_3")}>
                                  <span>Close Date:</span>
                                </p>
                                <p className={classes("typography__body-2 text")}>
                                  <span>9/12/2022</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <span slot="title">Opportunities (1)</span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel indicatorPosition="end">
                          <IgrList className={classes("list")}>
                            <IgrListItem>
                              <div slot="start">
                                <IgrAvatar shape="circle" className={classes("avatar avatar_3")}>
                                  <span className={classes("material-icons icon_2")}>
                                    <span>insert_drive_file</span>
                                  </span>
                                </IgrAvatar>
                              </div>
                              <div>
                                <a className={classes("typography__body-2 hyperlink_2")}>
                                  <span>Around-The-Horn-Contract-2022.docx</span>
                                </a>
                              </div>
                            </IgrListItem>
                            <IgrListItem>
                              <div slot="start">
                                <IgrAvatar shape="circle" className={classes("avatar avatar_4")}>
                                  <span className={classes("material-icons icon_2")}>
                                    <span>insert_drive_file</span>
                                  </span>
                                </IgrAvatar>
                              </div>
                              <div>
                                <a className={classes("typography__body-2 hyperlink_2")}>
                                  <span>Around-The-Horn-Contract-2021.docx</span>
                                </a>
                              </div>
                            </IgrListItem>
                          </IgrList>
                          <span slot="title">Contracts (2)</span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel indicatorPosition="end">
                          <p className={classes("typography__body-2 text_4")}>
                            <span>No cases filed.</span>
                          </p>
                          <span slot="title">Cases (0)</span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel indicatorPosition="end">
                          <p className={classes("typography__body-2 text_4")}>
                            <span>No notes added.</span>
                          </p>
                          <span slot="title">Notes (0)</span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel indicatorPosition="end">
                          <p className={classes("typography__body-2 text_4")}>
                            <span>No files uploaded</span>
                          </p>
                          <span slot="title">Files (0)</span>
                        </IgrExpansionPanel>
                      </IgrAccordion>
                    </div>
                    <span className={classes("material-icons")}>
                      <span>info</span>
                    </span>
                    <span slot="label">Related</span>
                  </IgrTab>
                  <IgrTab disabled={true} className={classes("tab-item")}>
                    <div className={classes("row-layout tab-item-content_2")}>
                      <div className={classes("row-layout demo-content")}>
                        <img src="/src/assets/start-building-dark.svg" className={classes("image")} />
                        <p className={classes("typography__body-2 text_5")}>
                          <span>Remove the "demo-content" container, and add your own content.</span>
                        </p>
                      </div>
                    </div>
                    <span className={classes("material-icons")}>
                      <span>info</span>
                    </span>
                    <span slot="label">Details</span>
                  </IgrTab>
                  <IgrTab disabled={true} className={classes("tab-item")}>
                    <div className={classes("row-layout tab-item-content_2")}>
                      <div className={classes("row-layout demo-content-1")}>
                        <img src="/src/assets/start-building-dark.svg" className={classes("image")} />
                        <p className={classes("typography__body-2 text_5")}>
                          <span>Remove the "demo-content" container, and add your own content.</span>
                        </p>
                      </div>
                    </div>
                    <span className={classes("material-icons")}>
                      <span>info</span>
                    </span>
                    <span slot="label">News</span>
                  </IgrTab>
                </IgrTabs>
              </div>
            </div>
            <div className={classes("column-layout customer-activity-conversations")}>
              <IgrTabs className={classes("tabs_1")}>
                <IgrTab selected={true} className={classes("tab-item")}>
                  <span slot="label">Activity</span>
                  <div className={classes("column-layout tab-item-content_3")}>
                    <div className={classes("column-layout group_13")}>
                      <div className={classes("row-layout buttons-2")}>
                        <IgrButton variant="outlined" type="button" className={classes("button_2")}>
                          <span className={classes("material-icons")}>
                            <span>calendar_today</span>
                          </span>
                          <span>New Meeting</span>
                          <IgrRipple></IgrRipple>
                        </IgrButton>
                        <IgrButton variant="outlined" type="button" className={classes("button_2")}>
                          <span className={classes("material-icons")}>
                            <span>assignment</span>
                          </span>
                          <span>New task</span>
                          <IgrRipple></IgrRipple>
                        </IgrButton>
                        <IgrButton variant="outlined" type="button" className={classes("button_2")}>
                          <span className={classes("material-icons")}>
                            <span>call</span>
                          </span>
                          <span>Log a call</span>
                          <IgrRipple></IgrRipple>
                        </IgrButton>
                      </div>
                      <IgrAccordion singleExpand={true} className={classes("accordion")}>
                        <IgrExpansionPanel indicatorPosition="end">
                          <IgrList className={classes("list")}>
                            <IgrListItem>
                              <div slot="start">
                                <IgrAvatar className={classes("avatar avatar_5")}>
                                  <span className={classes("material-icons icon_3")}>
                                    <span>calendar_month</span>
                                  </span>
                                </IgrAvatar>
                              </div>
                              <div>
                                <div className={classes("column-layout group_14")}>
                                  <div className={classes("row-layout group_15")}>
                                    <p className={classes("typography__subtitle-2 text_6")}>
                                      <span>Project Intro</span>
                                    </p>
                                  </div>
                                  <div className={classes("row-layout group_16")}>
                                    <p className={classes("typography__caption text_4")}>
                                      <span>11/1/2022</span>
                                    </p>
                                    <p className={classes("typography__caption text_4")}>
                                      <span>-</span>
                                    </p>
                                    <p className={classes("typography__caption text_4")}>
                                      <span>10am</span>
                                    </p>
                                  </div>
                                  <IgrChip className={classes("chip")}>
                                    <span>Zoom Meeting</span>
                                  </IgrChip>
                                </div>
                              </div>
                            </IgrListItem>
                            <IgrListItem>
                              <div slot="start">
                                <IgrAvatar className={classes("avatar avatar_6")}>
                                  <span className={classes("material-icons icon_3")}>
                                    <span>calendar_month</span>
                                  </span>
                                </IgrAvatar>
                              </div>
                              <div>
                                <div className={classes("column-layout group_14")}>
                                  <div className={classes("row-layout group_15")}>
                                    <p className={classes("typography__subtitle-2 text_6")}>
                                      <span>Sync Meeting</span>
                                    </p>
                                  </div>
                                  <div className={classes("row-layout group_16")}>
                                    <p className={classes("typography__caption text_4")}>
                                      <span>11/7/2022</span>
                                    </p>
                                    <p className={classes("typography__caption text_4")}>
                                      <span>-</span>
                                    </p>
                                    <p className={classes("typography__caption text_4")}>
                                      <span>2pm</span>
                                    </p>
                                  </div>
                                  <IgrChip className={classes("chip")}>
                                    <span>On Site Meeting</span>
                                  </IgrChip>
                                </div>
                              </div>
                            </IgrListItem>
                            <IgrListItem>
                              <div slot="start">
                                <IgrAvatar className={classes("avatar avatar_7")}>
                                  <span className={classes("material-icons icon_3")}>
                                    <span>calendar_month</span>
                                  </span>
                                </IgrAvatar>
                              </div>
                              <div>
                                <div className={classes("column-layout group_14")}>
                                  <div className={classes("row-layout group_15")}>
                                    <p className={classes("typography__subtitle-2 text_6")}>
                                      <span>Wrap Up Meeting</span>
                                    </p>
                                  </div>
                                  <div className={classes("row-layout group_16")}>
                                    <p className={classes("typography__caption text_4")}>
                                      <span>11/14/2022</span>
                                    </p>
                                    <p className={classes("typography__caption text_4")}>
                                      <span>-</span>
                                    </p>
                                    <p className={classes("typography__caption text_4")}>
                                      <span>4pm</span>
                                    </p>
                                  </div>
                                  <IgrChip className={classes("chip")}>
                                    <span>Phone call</span>
                                  </IgrChip>
                                </div>
                              </div>
                            </IgrListItem>
                          </IgrList>
                          <span slot="title">Upcoming Events (3)</span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel indicatorPosition="end">
                          <p className={classes("typography__body-2 text_4")}>
                            <span>No tasks added.</span>
                          </p>
                          <span slot="title">Tasks (0)</span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel indicatorPosition="end">
                          <p className={classes("typography__body-2 text_4")}>
                            <span>No call logged.</span>
                          </p>
                          <span slot="title">Call Logs (0)</span>
                        </IgrExpansionPanel>
                      </IgrAccordion>
                    </div>
                  </div>
                </IgrTab>
                <IgrTab disabled={true} className={classes("tab-item")}>
                  <span slot="label">Conversations</span>
                  <div className={classes("row-layout tab-item-content_4")}>
                    <div className={classes("column-layout demo-content-1")}>
                      <img src="/src/assets/start-building-dark.svg" className={classes("image")} />
                      <p className={classes("typography__body-2 text_5")}>
                        <span>Remove the "demo-content" container, and add your own content.</span>
                      </p>
                    </div>
                  </div>
                </IgrTab>
              </IgrTabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
