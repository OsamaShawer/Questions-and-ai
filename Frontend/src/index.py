# import fastapi
# import numpy as np
# from fastapi.middleware.cors import CORSMiddleware # Cors for giving access to fetch data
# from pydantic import BaseModel # As the schema in JS
# app = fastapi.FastAPI()

# app.add_middleware(
#   CORSMiddleware,
#   allow_origins=["http://localhost:5173"],
#   allow_credentials=True,
#   allow_methods=["*"],
#   allow_headers=["*"],
# )

# class data(BaseModel):
#   first: list[int]
#   sec: list[int]





a = [1 ,2 , 3]
import numpy as np
a = np.array([1, 2, 3, 4]) # First Array
a = a.reshape(2, 2) # r x c
b = np.array([1, 2, 3, 4]) # Second Array
b = a.reshape(2, 2) # r x c
print(a * b)
print("===========================================")
# First way: np.dot ( dot product via numpy )
print(np.dot(a, b))

print("===========================================")

# Second way: a @ b
print(a @ b)
