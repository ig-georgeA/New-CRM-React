import { IgrActionStrip, IgrCellTemplateContext, IgrColumn, IgrColumnGroup, IgrGrid, IgrGridEditDoneEventArgs, IgrGridEditingActions, IgrGridPinningActions, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarTitle, IgrPaginator, IgrRowDataEventArgs } from 'igniteui-react-grids';
import { IgrButton, IgrChip, IgrDialog, IgrInput, IgrRipple, IgrSelect, IgrSelectItem, IgrSnackbar } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { CustomerDto } from '../models/NorthwindSwagger/customer-dto';
import { deleteCustomerDto, postCustomerDto, putCustomerDto } from '../services/northwind-swagger';
import { formDataToObject } from '../utils/form-utils';
import { useGetCustomerDtoPagedResultDto } from '../hooks/northwind-swagger-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './customers.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Customers() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const newcustomerform = useRef<HTMLFormElement>(null);
  const newCustomerDialog = useRef<IgrDialog>(null);
  const snackbarsuccess = useRef<IgrSnackbar>(null);
  const snackbarerror = useRef<IgrSnackbar>(null);
  const [_selectedCustomer, setSelectedCustomer] = useState<CustomerDto | undefined>();
  const [grid_Page_Size, setGrid_Page_Size] = useState<number>(20);
  const [grid_Page_Index, setGrid_Page_Index] = useState<number>(0);
  const [value, setValue] = useState<string>('2');
  const [value1, setValue1] = useState<string | undefined>();
  const [value2, setValue2] = useState<string>('1');
  const { northwindSwaggerCustomerDtoPagedResultDto: grid_Data_Request } = useGetCustomerDtoPagedResultDto(grid_Page_Index ?? 0, grid_Page_Size ?? 0, '');

  async function rowEditDoneGrid(e: IgrGridEditDoneEventArgs) {
    if (!e.detail.isAddRow) {
      await putCustomerDto((e.detail.rowData as CustomerDto)?.customerId ?? '', e.detail.rowData as CustomerDto);
    }
  }
  async function rowAddedGrid(e: IgrRowDataEventArgs) {
    await postCustomerDto(e.detail.rowData as CustomerDto);
  }
  async function rowDeletedGrid(e: IgrRowDataEventArgs) {
    await deleteCustomerDto((e.detail.rowData as CustomerDto)?.customerId ?? '');
  }
  async function submitCustomerDto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = newcustomerform.current;
    const value = formDataToObject<CustomerDto>(target as HTMLFormElement);
    const data = await postCustomerDto(value);
    if (data) {
      newcustomerform.current?.reset();
      newCustomerDialog.current?.toggle();
      setGrid_Page_Index(parseFloat('0'));
      snackbarsuccess.current?.toggle();
    } else {
      snackbarerror.current?.toggle();
    }
  }
  function clickButton() {
    newcustomerform.current?.reset();
    newCustomerDialog.current?.toggle();
  }

  const columnBodyTemplate = (ctx: IgrCellTemplateContext) => {
    return (
      <>
        <a onClick={() => navigate(`/customer-details/AROUT`)} className={classes("typography__body-2 hyperlink")}>
          <span>{ctx.cell.value}</span>
        </a>
      </>
    )
  }

  const columnBodyTemplate1 = (ctx: IgrCellTemplateContext) => {
    return (
      <>
        <IgrChip className={classes("chip")}>
          <span slot="prefix">
            <span className={classes("material-icons icon_2")}>
              <span>phone</span>
            </span>
          </span>
          <span>{ctx.cell.value}</span>
        </IgrChip>
      </>
    )
  }

  return (
    <>
      <div className={classes("row-layout customers-container")}>
        <div className={classes("column-layout page-container")}>
          <div className={classes("column-layout page-header")}>
            <div className={classes("row-layout header")}>
              <div className={classes("row-layout page-title")}>
                <span className={classes("material-icons icon")}>
                  <span>people_outline</span>
                </span>
                <h5 className={classes("h5")}>
                  <span>Customers</span>
                </h5>
              </div>
              <div className={classes("row-layout buttons")}>
                <IgrButton type="button" onClick={() => newCustomerDialog?.current?.toggle()} className={classes("button")}>
                  <span className={classes("material-icons")}>
                    <span>add</span>
                  </span>
                  <span>New Customer</span>
                  <IgrRipple></IgrRipple>
                </IgrButton>
                <IgrButton variant="outlined" disabled={true} type="button" className={classes("button")}>
                  <span className={classes("material-icons")}>
                    <span>search</span>
                  </span>
                  <span>Discover companies</span>
                  <IgrRipple></IgrRipple>
                </IgrButton>
                <IgrButton variant="outlined" disabled={true} type="button" className={classes("button")}>
                  <span className={classes("material-icons")}>
                    <span>import_export</span>
                  </span>
                  <span>Import</span>
                  <IgrRipple></IgrRipple>
                </IgrButton>
              </div>
            </div>
          </div>
          <div className={classes("column-layout group")}>
            <div className={classes("row-layout filters-and-sorting-1")}>
              <div className={classes("row-layout group_1")}>
                <IgrSelect outlined={false} value={value} onChange={(e) => setValue(e.detail.value)} className={classes("user-input")}>
                  <IgrSelectItem value="1" key="9358a1b8-b736-457b-815e-8a47f9078c75">
                    <span>My Customers</span>
                  </IgrSelectItem>
                  <IgrSelectItem value="2" key="9319a25c-53c7-4862-a495-5d071e8211fb">
                    <span>All Customers</span>
                  </IgrSelectItem>
                </IgrSelect>
                <IgrInput type="search" value={value1 ?? ""} placeholder="Search" outlined={true} onChange={(e) => setValue1(e.detail)} className={classes("user-input")}>
                  <span slot="prefix">
                    <span className={classes("material-icons icon_1")}>
                      <span>search</span>
                    </span>
                  </span>
                </IgrInput>
              </div>
              <IgrSelect outlined={true} value={value2} onChange={(e) => setValue2(e.detail.value)} className={classes("user-input")}>
                <IgrSelectItem value="1" key="8c1df148-cad2-408a-a1ee-20e1cce2a4c9">
                  <span>Recently updated</span>
                </IgrSelectItem>
                <IgrSelectItem value="2" key="021ad551-9aff-411e-a95f-7df95cab3f40">
                  <span>Name</span>
                </IgrSelectItem>
              </IgrSelect>
            </div>
            <IgrGrid data={grid_Data_Request?.items} primaryKey="customerId" rowSelection="single" hideRowSelectors={true} rowEditable={true} pagingMode="remote" allowFiltering={true} filterMode="excelStyleFilter" onRowEditDone={rowEditDoneGrid} onRowAdded={rowAddedGrid} onRowDeleted={rowDeletedGrid} onRowSelectionChanging={(e) => setSelectedCustomer(e.detail.newSelection[0])} className={classes("ig-typography ig-scrollbar grid")}>
              <IgrGridToolbar>
                <IgrGridToolbarActions>
                  <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
                </IgrGridToolbarActions>
                <IgrGridToolbarTitle>
                  <span>Grid Toolbar</span>
                </IgrGridToolbarTitle>
              </IgrGridToolbar>
              <IgrPaginator perPage={grid_Page_Size} totalRecords={grid_Data_Request?.totalRecordsCount ?? 0} page={grid_Page_Index} onPageChange={(e) => setGrid_Page_Index(e.detail)} onPerPageChange={(e) => setGrid_Page_Size(e.detail)}></IgrPaginator>
              <IgrColumnGroup header="Customer info" className={classes("column-group")}></IgrColumnGroup>
              <IgrColumn field="customerId" dataType="string" header="customerId" width="137px" pinned={true} editable={false} sortable={true} bodyTemplate={columnBodyTemplate} selectable={false}></IgrColumn>
              <IgrColumn field="companyName" dataType="string" header="companyName" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="contactName" dataType="string" header="contactName" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable={true} selectable={false}></IgrColumn>
              <IgrColumnGroup header="Address" collapsible={true} className={classes("column-group")}></IgrColumnGroup>
              <IgrColumn field="address.phone" dataType="string" header="Phone" sortable={true} bodyTemplate={columnBodyTemplate1} selectable={false}></IgrColumn>
              <IgrColumnGroup header="Address" collapsible={true} className={classes("column-group")}></IgrColumnGroup>
              <IgrColumn field="address.country" dataType="string" header="Country" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="address.street" dataType="string" header="Street" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="address.city" dataType="string" header="City" sortable={true} selectable={false}></IgrColumn>
              <IgrActionStrip>
                <IgrGridPinningActions></IgrGridPinningActions>
                <IgrGridEditingActions addRow={true}></IgrGridEditingActions>
              </IgrActionStrip>
            </IgrGrid>
          </div>
        </div>
        <IgrDialog keepOpenOnEscape={true} hideDefaultAction={true} ref={newCustomerDialog}>
          <h5 slot="title">
            <span>New Customer</span>
          </h5>
          <form onSubmit={submitCustomerDto} ref={newcustomerform} className={classes("column-layout new_customer_form")}>
            <div className={classes("column-layout form_fields")}>
              <IgrInput label="Company name" required={true} outlined={true} minLength={0} maxLength={50} name="companyName">
                <p slot="value-missing">This field is required</p>
                <p slot="too-short">Entry should be at least 0 character(s) long</p>
                <p slot="too-long">Entry should be no more than 50 character(s) long</p>
              </IgrInput>
              <IgrInput label="Country" required={true} outlined={true} minLength={0} maxLength={50} name="address.country">
                <p slot="value-missing">This field is required</p>
                <p slot="too-short">Entry should be at least 0 character(s) long</p>
                <p slot="too-long">Entry should be no more than 50 character(s) long</p>
              </IgrInput>
              <IgrInput label="Contact name" outlined={true} minLength={0} maxLength={50} name="contactName">
                <p slot="too-short">Entry should be at least 0 character(s) long</p>
                <p slot="too-long">Entry should be no more than 50 character(s) long</p>
              </IgrInput>
              <IgrInput label="Contact title" outlined={true} minLength={0} maxLength={50} name="contactTitle">
                <p slot="too-short">Entry should be at least 0 character(s) long</p>
                <p slot="too-long">Entry should be no more than 50 character(s) long</p>
              </IgrInput>
              <IgrInput label="Street" outlined={true} minLength={0} maxLength={100} name="address.street">
                <p slot="too-short">Entry should be at least 0 character(s) long</p>
                <p slot="too-long">Entry should be no more than 100 character(s) long</p>
              </IgrInput>
              <IgrInput label="City" outlined={true} minLength={0} maxLength={50} name="address.city">
                <p slot="too-short">Entry should be at least 0 character(s) long</p>
                <p slot="too-long">Entry should be no more than 50 character(s) long</p>
              </IgrInput>
              <div className={classes("row-layout group_2")}>
                <IgrInput label="Region" outlined={true} minLength={0} maxLength={50} name="address.region" className={classes("input")}>
                  <p slot="too-short">Entry should be at least 0 character(s) long</p>
                  <p slot="too-long">Entry should be no more than 50 character(s) long</p>
                </IgrInput>
                <IgrInput label="Postal code" outlined={true} minLength={0} maxLength={20} name="address.postalCode" className={classes("input")}>
                  <p slot="too-short">Entry should be at least 0 character(s) long</p>
                  <p slot="too-long">Entry should be no more than 20 character(s) long</p>
                </IgrInput>
              </div>
              <IgrInput label="Phone" outlined={true} pattern="^\+?[0-9][0-9\-]{1,14}$" name="address.phone">
                <p slot="pattern-mismatch">Entry does not match the required pattern</p>
              </IgrInput>
            </div>
            <IgrSnackbar actionText="OK" onAction={() => snackbarsuccess?.current?.toggle()} ref={snackbarsuccess}>
              <span>Your new submission was saved successfully!</span>
            </IgrSnackbar>
            <IgrSnackbar actionText="OK" onAction={() => snackbarerror?.current?.toggle()} ref={snackbarerror}>
              <span>Uh-oh! Something went wrong.</span>
            </IgrSnackbar>
            <div className={classes("row-layout group_3")}>
              <IgrButton variant="flat" type="reset" className={classes("button_1")}>
                <span>Reset</span>
                <IgrRipple></IgrRipple>
              </IgrButton>
              <div className={classes("row-layout group_4")}>
                <IgrButton variant="outlined" type="button" onClick={clickButton} className={classes("button_1")}>
                  <span>Cancel</span>
                  <IgrRipple></IgrRipple>
                </IgrButton>
                <IgrButton type="submit" className={classes("button_1")}>
                  <span>Add</span>
                  <IgrRipple></IgrRipple>
                </IgrButton>
              </div>
            </div>
          </form>
        </IgrDialog>
      </div>
    </>
  );
}
