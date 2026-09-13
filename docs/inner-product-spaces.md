# 내적 공간

# 개요

[벡터 공간](vector-spaces.md)만으로는 길이와 각도가 정해지지 않는다. 내적은 두 벡터에 스칼라를 대응시키는 양의 정부호 쌍선형(복소수에서는 켤레쌍선형) 형식으로, 여기서 노름·거리·직교성·정사영이 모두 파생된다[^1]. Cauchy–Schwarz 부등식이 각도의 코사인을 1 이하로 묶어 주고, Gram–Schmidt 과정이 임의의 기저를 정규직교기저로 바꾼다. 정사영은 부분공간에서 가장 가까운 점을 주므로 최소제곱 근사의 기하가 된다.

# 직관

평면에서 두 벡터의 점곱은 한 벡터를 다른 벡터 방향으로 그림자 내린 길이에 상대 길이를 곱한 값이다. 그림자가 0이면 수직이고, 그림자가 최대이면 두 벡터가 같은 방향이다. Cauchy–Schwarz는 "그림자는 원래 길이보다 길 수 없다"는 진술이다.

노름이 정해지면 거리도 정해져 [거리 공간](metric-spaces.md)이 되므로, 수렴·연속·완비성을 그대로 쓸 수 있다. 다만 모든 노름이 내적에서 오지는 않는다. 좌표 절댓값의 최댓값으로 정의한 노름은 평행사변형 법칙을 깨므로 어떤 내적에서도 유도되지 않는다.

# 정의

V를 실수체 또는 복소수체 위의 벡터 공간이라 하자. 내적은 V의 두 벡터에 스칼라를 주는 함수로, 첫 인수에 대한 선형성, 켤레대칭성, 양의 정부호성을 만족한다[^1]. 아래에서 윗줄은 복소켤레이고, 실수 위에서는 켤레가 항등이므로 대칭성이 된다.

$$
\langle \alpha u+\beta w,\ v\rangle=\alpha\langle u,v\rangle+\beta\langle w,v\rangle
$$

$$
\langle u,v\rangle=\overline{\langle v,u\rangle},\qquad
\langle v,v\rangle\ge 0,\quad \langle v,v\rangle=0\iff v=0
$$

내적이 주어진 공간을 내적 공간이라 하고, 노름과 거리를 다음처럼 정의한다.

$$
\lVert v\rVert=\sqrt{\langle v,v\rangle},\qquad d(u,v)=\lVert u-v\rVert
$$

두 벡터의 내적이 0이면 직교라 한다. 노름이 1인 서로 직교하는 벡터들의 모임을 정규직교집합, 그것이 기저이면 정규직교기저라 한다.

$$
\langle e_i,e_j\rangle=\delta_{ij}
$$

표준 예는 실수 n짝의 점곱, 복소 n짝의 켤레 점곱, 구간에서 제곱적분 가능한 함수들의 적분 내적이다.

$$
\langle f,g\rangle=\int_a^b f(x)\overline{g(x)}\,dx
$$

# 성질

## Cauchy–Schwarz 부등식

임의의 u, v에 대해 다음이 성립하고, 등호는 u와 v가 선형종속일 때만 성립한다[^1].

$$
|\langle u,v\rangle|\le \lVert u\rVert\,\lVert v\rVert
$$

증명: v가 0이면 자명하다. v가 0이 아니면 u에서 v 방향 성분을 뺀 벡터의 노름 제곱이 음이 아니라는 사실을 쓴다.

$$
0\le\Big\lVert u-\frac{\langle u,v\rangle}{\lVert v\rVert^2}v\Big\rVert^2
=\lVert u\rVert^2-\frac{|\langle u,v\rangle|^2}{\lVert v\rVert^2}
$$

정리하면 부등식이 되고, 등호는 뺀 벡터가 0, 즉 u가 v의 배수일 때다.

## 노름의 성질

삼각부등식은 양변을 제곱하고 Cauchy–Schwarz를 적용하면 나온다. 따라서 내적 공간은 항상 거리 공간이다. 직교하면 Pythagoras 등식이, 일반적으로는 평행사변형 법칙이 성립한다.

$$
\lVert u+v\rVert\le\lVert u\rVert+\lVert v\rVert,
\qquad \langle u,v\rangle=0\Rightarrow \lVert u+v\rVert^2=\lVert u\rVert^2+\lVert v\rVert^2
$$

$$
\lVert u+v\rVert^2+\lVert u-v\rVert^2=2\lVert u\rVert^2+2\lVert v\rVert^2
$$

역으로 평행사변형 법칙을 만족하는 노름은 내적에서 유도된다(Jordan–von Neumann 정리). 거리에 대해 [완비](completeness.md)인 내적 공간을 Hilbert 공간이라 한다.

## Gram–Schmidt 과정

선형독립인 v₁,…,vₙ에서 같은 span을 갖는 정규직교기저를 귀납적으로 만든다[^2]. k번째 단계에서 이미 만든 정규직교벡터 방향 성분을 빼면 된다.

$$
w_k=v_k-\sum_{j=1}^{k-1}\langle v_k,e_j\rangle e_j,
\qquad e_k=\frac{w_k}{\lVert w_k\rVert}
$$

wₖ가 0이 되면 vₖ가 앞의 벡터들의 span에 있다는 뜻이므로, 선형독립 가정 아래 그런 일은 없다. 행렬 언어로는 열이 독립인 행렬의 QR 분해다. 정규직교기저에서는 좌표가 내적으로 바로 읽히고 노름이 좌표 제곱합이 된다(Parseval 등식).

$$
v=\sum_{i=1}^{n}\langle v,e_i\rangle e_i,
\qquad \lVert v\rVert^2=\sum_{i=1}^{n}|\langle v,e_i\rangle|^2
$$

## 정사영과 최선의 근사

W를 유한차원 부분공간, e₁,…,e_m을 W의 정규직교기저라 하면 W로의 정사영은 다음과 같다.

$$
P_W v=\sum_{i=1}^{m}\langle v,e_i\rangle e_i
$$

v - P_W v는 W의 모든 원소와 직교하고, 따라서 W의 임의의 w에 대해 Pythagoras로 다음을 얻는다. 즉 P_W v는 W 안에서 v에 가장 가까운 유일한 점이다.

$$
\lVert v-w\rVert^2=\lVert v-P_Wv\rVert^2+\lVert P_Wv-w\rVert^2\ \ge\ \lVert v-P_Wv\rVert^2
$$

또 직교여공간을 W에 직교하는 벡터 전체로 정의하면 유한차원에서 공간이 직교분해된다.

$$
V=W\oplus W^{\perp},\qquad \dim W+\dim W^{\perp}=\dim V
$$

# 활용

## 최소제곱

A의 열이 span하는 부분공간으로 b를 정사영하면 과결정 연립방정식의 최소제곱해를 얻고, 직교조건 Aᵗ(b-Ax)=0이 정규방정식이 된다.

$$
A^{\mathsf T}A\,x=A^{\mathsf T}b
$$

열이 독립이면 AᵗA가 가역이라 해가 유일하고, 그렇지 않으면 [특이값 분해](singular-value-decomposition.md)로 최소노름해를 고른다. 이 문제의 목적함수는 볼록이므로 [볼록성](convexity.md) 이론의 전형적인 예이기도 하다.

```python
import numpy as np
A = np.array([[1., 0.], [1., 1.], [1., 2.]])
b = np.array([1., 2., 2.])
x, *_ = np.linalg.lstsq(A, b, rcond=None)
print(x)                      # 정규방정식의 해
print(A @ x - b)              # 잔차는 A의 열공간과 직교한다
```

## 직교기저로 보는 변환

복소 지수함수들은 주기함수 공간에서 정규직교기저이고, 유한 차원에서는 [이산 Fourier 변환](fourier.md)이 그 좌표 변환이다. 신호를 직교성분으로 쪼개면 에너지가 성분별로 분리된다(Parseval).

## 연산자 이론으로의 연결

내적이 있으면 수반연산자와 자기수반성을 정의할 수 있고, 이는 [스펙트럼 정리](spectral-theorem.md)로 이어진다. 확률에서는 제곱적분 가능한 [확률변수](random-variables.md)들의 공분산이 내적이 되어 상관계수가 Cauchy–Schwarz의 코사인, 조건부기댓값이 정사영으로 해석된다.

[^1]: Anne Schilling et al., MAT067 — Inner Product Spaces, University of California, Davis. https://www.math.ucdavis.edu/~anne/WQ2007/mat67-Lj-Inner_Product_Spaces.pdf
[^2]: Beifang Chen, Math 111 — Inner Product Spaces and Orthogonality, HKUST. https://www.math.hkust.edu.hk/~mabfchen/Math111/Week13-14.pdf

# 연관 문서

## 선수지식

- [벡터 공간](vector-spaces.md)
- [거리 공간](metric-spaces.md)

## 더 알아보기

- [곡률](curvature.md)
- [스펙트럼 정리](spectral-theorem.md)
- [Hilbert 공간](hilbert-spaces.md)
- [선형회귀와 최소제곱법](linear-regression.md)
- [격자와 최단벡터 문제](lattices.md)

#linear_algebra
