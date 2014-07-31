/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2014 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */

'use strict';

angular.module('ds.cart')
    .factory('CartREST', ['settings', 'Restangular', function(settings, Restangular){

        return {
            /** Endpoint for Main Cart.*/
            Cart: Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(settings.apis.cart.baseUrl);
            }),
            /** Endpoint for CartDetails. */
            CartDetails: Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(settings.apis.cartDetails.baseUrl);
            }),
            /** Endpoint for CartItems API. */
            CartItems: Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(settings.apis.cartItems.baseUrl);
            })
        };


    }]);