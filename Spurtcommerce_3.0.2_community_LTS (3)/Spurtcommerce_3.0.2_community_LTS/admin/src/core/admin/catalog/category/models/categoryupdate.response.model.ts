/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CategoryupdateResponseModel {
  public user: any = {};

  constructor(categoryupdateFormResponse: any) {
    this.user = categoryupdateFormResponse || '';
  }
}
