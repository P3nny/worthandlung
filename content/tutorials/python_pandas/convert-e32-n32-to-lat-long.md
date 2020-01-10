---
title: "Convert E32 N32 to Lat Long"
date: 2020-01-10T23:44:16+01:00
draft: true
---

```python
import utm
import pandas as pd
```


```python
# example from utm
utm.to_latlon(473978.0, 5797401.0, 32, 'U')
```




    (52.326310175082746, 8.618166607021827)




```python
df = pd.read_csv('geo.csv')
df.columns
```




    Index(['gewaesser_id', 'gewaessername', 'messstellen_id', 'name',
           'messstellentyp_opt', 'stationierung_st_3', 'rechtswert', 'hochwert',
           'e32', 'n32', 'ofwk_nrw_id', 'brd_typ', 'oekoregion', 'geochemie_opt'],
          dtype='object')




```python
df = df.dropna()

def getUTMs(row):
    tup = utm.to_latlon(row.iloc[0],row.iloc[1], 32, 'U')
    return pd.Series(tup[:2])

df[['lat','long']] = df[['e32','n32']].apply(getUTMs , axis=1)
df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>gewaesser_id</th>
      <th>gewaessername</th>
      <th>messstellen_id</th>
      <th>name</th>
      <th>messstellentyp_opt</th>
      <th>stationierung_st_3</th>
      <th>rechtswert</th>
      <th>hochwert</th>
      <th>e32</th>
      <th>n32</th>
      <th>ofwk_nrw_id</th>
      <th>brd_typ</th>
      <th>oekoregion</th>
      <th>geochemie_opt</th>
      <th>lat</th>
      <th>long</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>Rhein</td>
      <td>474</td>
      <td>Xanten</td>
      <td>1.0</td>
      <td>823.288025</td>
      <td>2533354.0</td>
      <td>5725709.0</td>
      <td>325824.0</td>
      <td>5726752.0</td>
      <td>DE_NRW_2_813012</td>
      <td>20 - sandgeprägte Ströme</td>
      <td>Norddeutsches Tiefland</td>
      <td>2.0</td>
      <td>51.664719</td>
      <td>6.481444</td>
    </tr>
  </tbody>
</table>
</div>




```python

```