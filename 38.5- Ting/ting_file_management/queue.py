class Queue:
    def __init__(self):
        self._data = list()

    def __len__(self):
        return len(self._data)

    def enqueue(self, value):
        self._data.append(value)

    def is_empty(self):
        return not bool(self.__len__())

    def dequeue(self):
        if self.is_empty():
            return None
        return self._data.pop(0)

    def search(self, index):
        if index in range(0, len(self._data)):
            return self._data[index]
        raise IndexError
