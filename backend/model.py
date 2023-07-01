import pyxmodel
import alphaindex
import lg

def train_data(alpha, beta, data, lamba):
  omega = (alpha + beta ) * lamba * 0.001 + data

  i = pyxmodel.get(omega)

  return i * 0.005


