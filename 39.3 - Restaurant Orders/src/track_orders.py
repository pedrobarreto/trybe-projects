from collections import Counter

# https://dev.to/svinci/intersection-union-and-difference-of-sets-in-python-4gkn


class TrackOrders:
    # aqui deve expor a quantidade de estoque
    def __len__(self):
        return len(self._data)

    def __init__(self):
        self._data = list()
        self._all_orders = list()
        self._all_days = list()

    def add_new_order(self, customer, order, day):
        orders_dict = dict()
        orders_dict["customers"] = customer
        orders_dict["orders"] = order
        orders_dict["days"] = day
        self._all_orders.append(order)
        self._all_days.append(day)
        self._data.append(orders_dict)

    def get_most_ordered_dish_per_customer(self, customer):
        customer_orders = [
            k["orders"] for k in self._data if k["customers"] == customer
        ]
        qty = Counter(customer_orders)
        return max(qty, key=qty.get)

    def get_never_ordered_per_customer(self, customer):
        customer_orders = [
            k["orders"] for k in self._data if k["customers"] == customer
        ]
        return set(self._all_orders).difference(set(customer_orders))

    def get_days_never_visited_per_customer(self, customer):
        customer_days = [k["days"]
                         for k in self._data if k["customers"] == customer]
        return set(self._all_days).difference(set(customer_days))

    def get_busiest_day(self):
        days = Counter(self._all_days)
        return max(days, key=days.get)

    def get_least_busy_day(self):
        days = Counter(self._all_days)
        return min(days, key=days.get)
