import { H as HttpFactory } from './fetch-61d93cc9.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class StockModule extends HttpFactory {
  constructor() {
    super(...arguments);
    __publicField(this, "STOCK_CATEGORY", "stock_categories");
    __publicField(this, "STOCK_SUPPLIER", "stock_suppliers");
    __publicField(this, "STOCK_ITEM", "stock_items");
    __publicField(this, "STOCK_UNIT", "stock_units");
    __publicField(this, "STOCK_LOCATION", "stock_locations");
    __publicField(this, "STOCK_ORDER", "stock_orders");
    __publicField(this, "STOCK_ORDER_STATUS", "stock_order_statuses");
    __publicField(this, "STOCK", "stocks");
    __publicField(this, "PHARMACY", "stock_pharmacy_approver_and_issuers");
    __publicField(this, "STOCK_MOVEMENTS", "stock_movements");
    __publicField(this, "STOCK_TRANSACTION_TYPES", "stock_transaction_types");
    __publicField(this, "STOCK_ADJUSTMENT_REASONS", "stock_adjustment_reasons");
    __publicField(this, "STOCK_REPORTS", "stock_reports");
  }
  async getStockCategory(token) {
    const request = {
      route: this.STOCK_CATEGORY,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async createStockCategory(token, params) {
    const request = {
      route: this.STOCK_CATEGORY,
      method: "POST",
      body: params,
      token: `${token}`
    };
    return this.call(request);
  }
  async updateStockCategory(token, params) {
    const request = {
      route: `${this.STOCK_CATEGORY}/${params.id}`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async readStockCategory(token, params) {
    const request = {
      route: `${this.STOCK_CATEGORY}/${params.id}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async voidStockCategory(token, params) {
    const request = {
      route: `${this.STOCK_CATEGORY}/${params.id}`,
      method: "DELETE",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  /**
   * stock suppliers
   */
  async getStockSupplier(token) {
    const request = {
      route: this.STOCK_SUPPLIER,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async createStockSupplier(token, params) {
    const request = {
      route: this.STOCK_SUPPLIER,
      method: "POST",
      body: params,
      token: `${token}`
    };
    return this.call(request);
  }
  async updateStockSupplier(token, params) {
    const request = {
      route: `${this.STOCK_SUPPLIER}/${params.id}`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async readStockSupplier(token, params) {
    const request = {
      route: `${this.STOCK_SUPPLIER}/${params.id}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async voidStockSupplier(token, params) {
    const request = {
      route: `${this.STOCK_SUPPLIER}/${params.id}`,
      method: "DELETE",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  /**
   * stock units
   */
  async getStockUnit(token) {
    const request = {
      route: this.STOCK_UNIT,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async createStockUnit(token, params) {
    const request = {
      route: this.STOCK_UNIT,
      method: "POST",
      body: params,
      token: `${token}`
    };
    return this.call(request);
  }
  async updateStockUnit(token, params) {
    const request = {
      route: `${this.STOCK_UNIT}/${params.id}`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async readStockUnit(token, params) {
    const request = {
      route: `${this.STOCK_UNIT}/${params.id}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async voidStockUnit(token, params) {
    const request = {
      route: `${this.STOCK_UNIT}/${params.id}`,
      method: "DELETE",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  /**
   * stock items
   */
  async getStockItem(token) {
    const request = {
      route: this.STOCK_ITEM,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async createStockItem(token, params) {
    const request = {
      route: this.STOCK_ITEM,
      method: "POST",
      body: params,
      token: `${token}`
    };
    return this.call(request);
  }
  async updateStockItem(token, params) {
    const request = {
      route: `${this.STOCK_ITEM}/${params.id}`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async readStockItem(token, params) {
    const request = {
      route: `${this.STOCK_ITEM}/${params.id}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async voidStockItem(token, params) {
    const request = {
      route: `${this.STOCK_ITEM}/${params.id}`,
      method: "DELETE",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  /**
   * stock locations
   */
  async getStockLocation(token) {
    const request = {
      route: this.STOCK_LOCATION,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async createStockLocation(token, params) {
    const request = {
      route: this.STOCK_LOCATION,
      method: "POST",
      body: params,
      token: `${token}`
    };
    return this.call(request);
  }
  async updateStockLocation(token, params) {
    const request = {
      route: `${this.STOCK_LOCATION}/${params.id}`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async readStockLocation(token, params) {
    const request = {
      route: `${this.STOCK_LOCATION}/${params.id}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async voidStockLocation(token, params) {
    const request = {
      route: `${this.STOCK_LOCATION}/${params.id}`,
      method: "DELETE",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  /**
   * stock orders
   */
  async checkStockOrder(token, params) {
    const request = {
      route: `${this.STOCK_ORDER}/check_voucher_number?voucher_number=${params.voucher_number}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async createStockOrder(token, params) {
    const request = {
      route: this.STOCK_ORDER,
      method: "POST",
      body: params,
      token: `${token}`
    };
    return this.call(request);
  }
  async getStockOrder(token, stockId, search, stock_status_id, pagination) {
    const request = {
      route: `${this.STOCK_ORDER}/${stockId}?search=${search}&stock_status_id=${stock_status_id}&${pagination}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async getStockOrderStatus(token) {
    const request = {
      route: `${this.STOCK_ORDER}/stock_statuses`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async rejectStockOrder(token, params) {
    const request = {
      route: `${this.STOCK_ORDER_STATUS}/reject_order`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async verifyStockOrder(token, params) {
    const request = {
      route: `${this.STOCK_ORDER_STATUS}/approve_order_request`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async verifyStockOrderRequisition(token, params) {
    const request = {
      route: `${this.STOCK_ORDER_STATUS}/approve_stock_requisition_request`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async receiveStockOrder(token, params) {
    const request = {
      route: `${this.STOCK_ORDER_STATUS}/receive_stock_order`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async approveStockOrder(token, params) {
    const request = {
      route: `${this.STOCK_ORDER_STATUS}/approve_stock_order_receipt`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async receiveStockOrderRequisition(token, params) {
    const request = {
      route: `${this.STOCK_ORDER_STATUS}/receive_requisition`,
      method: "POST",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async approveStockOrderRequisition(token, params) {
    const request = {
      route: `${this.STOCK_ORDER_STATUS}/approve_stock_requisition`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async updateStockOrderStatus(token, params) {
    const request = {
      route: `${this.STOCK_ORDER_STATUS}/${params.route}`,
      method: "PUT",
      body: params,
      token: `${token}`
    };
    return this.call(request);
  }
  async createStockOrderPharmacy(token, params) {
    const request = {
      route: `${this.PHARMACY}`,
      method: "POST",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async updateStockOrderPharmacy(token, params) {
    const request = {
      route: `${this.PHARMACY}/${params.pharmacy_id}`,
      method: "PUT",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  /**
   * stock orders
   */
  async getStock(token, params) {
    const request = {
      route: `${this.STOCK}/${params}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  /**
   * stock transactions
   */
  async checkStockQuantity(token, params) {
    const request = {
      route: `${this.STOCK_MOVEMENTS}/deduction_allowed?stock_item_id=${params.stock_item_id}&quantity=${params.quantity}&batch=${params.batch}&lot=${params.lot}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async getStockTransactions(token, params) {
    const request = {
      route: `${this.STOCK_MOVEMENTS}/transactions?${params}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async getStockTransactionTypes(token) {
    const request = {
      route: `${this.STOCK_TRANSACTION_TYPES}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async getStockIssues(token, params) {
    const request = {
      route: `${this.STOCK_MOVEMENTS}/stock_movement_with_respective_transaction?${params}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async approveStockIssues(token, issueId) {
    const request = {
      route: `${this.STOCK_MOVEMENTS}/approve_issue_out/`,
      method: "PUT",
      token: `${token}`,
      body: {
        stock_movement_id: issueId
      }
    };
    return this.call(request);
  }
  async rejectStockIssues(token, issueId, reason) {
    const request = {
      route: `${this.STOCK_MOVEMENTS}/reject_issue_out`,
      method: "PUT",
      token: `${token}`,
      body: {
        stock_movement_id: issueId,
        stock_status_reason: reason
      }
    };
    return this.call(request);
  }
  async stockOutTransaction(token, params) {
    const request = {
      route: `${this.STOCK_MOVEMENTS}/issue_stock_out`,
      method: "POST",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  async receiveExternalStock(token, params) {
    const request = {
      route: `${this.STOCK_MOVEMENTS}/receive_external_stock`,
      method: "POST",
      token: `${token}`,
      body: params
    };
    return this.call(request);
  }
  /**
   * stock adjustment
   */
  async getStockAdjustmentReasons(token) {
    const request = {
      route: `${this.STOCK_ADJUSTMENT_REASONS}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async adjustStock(token, body) {
    const request = {
      route: `${this.STOCK_MOVEMENTS}/adjust_stock`,
      method: "PUT",
      token: `${token}`,
      body
    };
    return this.call(request);
  }
  async reverseStockAdjustment(token, body) {
    const request = {
      route: `${this.STOCK_MOVEMENTS}/reverse_stock_adjustment`,
      method: "PUT",
      token: `${token}`,
      body
    };
    return this.call(request);
  }
  async getStockAdjustments(token) {
    const request = {
      route: `${this.STOCK_ADJUSTMENT_REASONS}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
  async generateStockMovementReport(token, type, from, to) {
    const request = {
      route: `${this.STOCK_REPORTS}/stock_movement?transaction_type=${type}&from=${from}&to=${to}`,
      method: "GET",
      token: `${token}`
    };
    return this.call(request);
  }
}
const StockModule$1 = StockModule;

export { StockModule$1 as S };
//# sourceMappingURL=stock-8944f509.mjs.map
