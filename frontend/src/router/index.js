import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import Auth from '@/views/Auth/Auth'
import Main from '@/views/Main/Main'

import AddressList from '@/views/Main/Address/AddressList'
import AddressCreate from '@/views/Main/Address/AddressCreate'

import CategoryList from '@/views/Main/Catergory/CategoryList'
import CategoryCreate from '@/views/Main/Catergory/CategoryCreate'

import AgentList from '@/views/Main/Agent/AgentList'
import AgentCreate from '@/views/Main/Agent/AgentCreate'

import Report from '@/views/Main/Report/Report'
import ReportProductOfOrder from '@/views/Main/Report/ReportProductOfOrder'
import ReportSupplierWithSupply from '@/views/Main/Report/ReportSupplierWithSupply'
import ReportClientOrders from '@/views/Main/Report/ReportClientOrders'
import ReportPopularProducts from '@/views/Main/Report/ReportPopularProducts'

import TTNList from '@/views/Main/TTN/TTNList'
import TTNCreate from '@/views/Main/TTN/TTNCreate'

import OrderList from '@/views/Main/Order/OrderList'
import OrderCreate from '@/views/Main/Order/OrderCreate'

import ProductList from '@/views/Main/Product/ProductList'
import ProductCreate from '@/views/Main/Product/ProductCreate'

import SupplyList from '@/views/Main/Supply/SupplyList'
import SupplyCreate from '@/views/Main/Supply/SupplyCreate'

import ReturnList from '@/views/Main/Return/ReturnList'
import ReturnCreate from '@/views/Main/Return/ReturnCreate'

import UtilList from '@/views/Main/Util/UtilList'
import UtilCreate from '@/views/Main/Util/UtilCreate'

const routes = [
  {
    path: '/auth',
    name: 'Authenticate',
    component: Auth,
    meta: {
      title: 'Войти в систему',
      auth: false
    }
  },
  {
    path: '/',
    name: 'Main page',
    component: Main,
    redirect: '/orders',
    meta: {
      auth: true
    },
    children: [
      {
        path: '/category',
        name: 'Show category',
        component: CategoryList,
        meta: {
          title: 'Список категорий'
        }
      },
      {
        path: '/category/create',
        name: 'Create category',
        component: CategoryCreate,
        meta: {
          title: 'Создать категорию'
        }
      },
      {
        path: '/address',
        name: 'Show address',
        component: AddressList,
        meta: {
          title: 'Список адресов'
        }
      },
      {
        path: '/address/create',
        name: 'Create address',
        component: AddressCreate,
        meta: {
          title: 'Создать адрес'
        }
      },
      {
        path: '/agents',
        name: 'Show agents',
        component: AgentList,
        meta: {
          title: 'Список контрагентов'
        }
      },
      {
        path: '/agents/create',
        name: 'Create agent',
        component: AgentCreate,
        meta: {
          title: 'Создать контрагента'
        }
      },
      {
        path: '/products',
        name: 'Show product',
        component: ProductList,
        meta: {
          title: 'Список товаров'
        }
      },
      {
        path: '/products/create',
        name: 'Create product',
        component: ProductCreate,
        meta: {
          title: 'Создать товар'
        }
      },
      {
        path: '/supplies',
        name: 'Show supplies',
        component: SupplyList,
        meta: {
          title: 'Список поставок'
        }
      },
      {
        path: '/supplies/create',
        name: 'Create supply',
        component: SupplyCreate,
        meta: {
          title: 'Создать поставку'
        }
      },
      {
        path: '/returns',
        name: 'Show returns',
        component: ReturnList,
        meta: {
          title: 'Список возвратов'
        }
      },
      {
        path: '/returns/create',
        name: 'Create return',
        component: ReturnCreate,
        meta: {
          title: 'Создать возврат'
        }
      },
      {
        path: '/utils',
        name: 'Show utils',
        component: UtilList,
        meta: {
          title: 'Список утилизаций'
        }
      },
      {
        path: '/utils/create',
        name: 'Create util',
        component: UtilCreate,
        meta: {
          title: 'Создать утилизацию'
        }
      },
      {
        path: '/orders',
        name: 'Show orders',
        component: OrderList,
        meta: {
          title: 'Список заказов'
        }
      },
      {
        path: '/orders/create',
        name: 'Create orders',
        component: OrderCreate,
        meta: {
          title: 'Создать заказ'
        }
      },
      {
        path: '/ttn',
        name: 'Show TTN',
        component: TTNList,
        meta: {
          title: 'Список ТТН'
        }
      },
      {
        path: '/ttn/create',
        name: 'Create TTN',
        component: TTNCreate,
        meta: {
          title: 'Создать ТТН'
        }
      },
      {
        path: '/reports',
        name: 'Show reports',
        redirect: { name: 'Product in order' },
        component: Report,
        children: [
          {
            path: '/products-in-order',
            name: 'Product in order',
            component: ReportProductOfOrder,
            meta: {
              title: 'Список товаров в заказе'
            }
          },
          {
            path: '/suppliers-period',
            name: 'Suppliers with supply',
            component: ReportSupplierWithSupply,
            meta: {
              title: 'Поставщики с кол-вом поставок'
            }
          },
          {
            path: '/client-orders',
            name: 'Client orders',
            component: ReportClientOrders,
            meta: {
              title: 'Заказы клиента'
            }
          },
          {
            path: '/popular',
            name: 'Popular products',
            component: ReportPopularProducts,
            meta: {
              title: 'Популярные товары'
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const userIsAuth = store.state.auth.isAuth
  const directionAuth = to.meta.auth

  if (directionAuth && !userIsAuth) {
    next({ name: 'Authenticate' })
  } else if (directionAuth === false && userIsAuth) {
    next(from.path)
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title ?? 'Складская система'} - WareHouse Store`
  next()
})

export default router
