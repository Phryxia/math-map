# Gurarii–Kadec–Macaev 정리

# 개요

**Gurarii–Kadec–Macaev 정리(Gurarii–Kadec–Macaev theorem)** 는 $\ell_p^n$ 과 Euclid 공간 $\ell_2^n$ 의 [Banach–Mazur 거리](banach-mazur-distance.md)가 정확히 $n^{\vert 1/p-1/2\vert}$ 라는 정리다. 좌표를 그대로 두는 항등사상은 [Hölder 부등식](holder-inequality.md)만으로 이 값을 준다. 축을 돌리거나 늘리는 다른 선형사상이 두 노름을 더 가깝게 맞출 수 있는지가 물음이다.

좌표 벡터에 부호를 붙여 더한 벡터 $2^n$ 개는 $\ell_p$ 노름이 모두 같고, Euclid 공간에서는 그 길이의 제곱을 평균하면 각 벡터의 길이 제곱의 합이 된다. 이 두 사실을 맞대면 어떤 선형사상도 항등사상보다 나을 수 없다.

# 직관

평면에 노름 $\vert x_1\vert+\vert x_2\vert$ 를 주고 선형사상 $T$ 로 Euclid 평면에 옮긴다. $e_1$, $e_2$ 는 노름이 $1$ 이고 $e_1+e_2$, $e_1-e_2$ 는 노름이 $2$ 다. Euclid 평면의 평행사변형 법칙은 다음을 준다.

$$
\vert T(e_1+e_2)\vert^2+\vert T(e_1-e_2)\vert^2=2\big(\vert Te_1\vert^2+\vert Te_2\vert^2\big)
$$

오른쪽은 $\vert Te_i\vert\le\Vert T\Vert$ 이므로 $4\Vert T\Vert^2$ 이하다. 왼쪽은 $\vert T(e_1\pm e_2)\vert\ge 2/\Vert T^{-1}\Vert$ 이므로 $8/\Vert T^{-1}\Vert^2$ 이상이다. 둘을 맞대면 $\Vert T\Vert\thinspace\Vert T^{-1}\Vert\ge\sqrt2$ 이고, 항등사상이 $\sqrt 2$ 를 주므로 두 노름의 거리는 $\sqrt2$ 다.

차원이 $n$ 이면 평행사변형 법칙 대신 부호를 붙인 합 $2^n$ 개의 평균을 쓰고, $\ell_1$ 노름 대신 $\ell_p$ 노름을 쓰면 같은 셈이 된다.

# 정의

$1\le p\le\infty$ 에 대해 $\ell_p^n$ 은 $\mathbb R^n$ 에 노름 $\Vert x\Vert_p=(\sum_i\vert x_i\vert^p)^{1/p}$ 를 준 공간이고, $p=\infty$ 이면 $\Vert x\Vert_\infty=\max_i\vert x_i\vert$ 다. 차원이 같은 두 노름 공간 $X,Y$ 의 Banach–Mazur 거리는 선형 동형사상 $T\colon X\to Y$ 전체에 대한 하한 $d(X,Y)=\inf\Vert T\Vert\thinspace\Vert T^{-1}\Vert$ 다. 직관 절은 $d(\ell_1^2,\ell_2^2)=\sqrt2$ 를 보였다.

부호 $\varepsilon=(\varepsilon_1,\dots,\varepsilon_n)\in\lbrace -1,1\rbrace^n$ 전체 위의 평균을 $\mathbb E_\varepsilon$ 로 쓴다. 이것은 [Rademacher type](rademacher-type.md)의 Rademacher 열에 대한 기댓값이다.

# 성질

## 부호 평균의 등식

Euclid 공간의 벡터 $v_1,\dots,v_n$ 에 대해 다음이 성립한다.

$$
\mathbb E_\varepsilon\Big\vert\sum_{i=1}^n\varepsilon_iv_i\Big\vert^2=\sum_{i=1}^n\vert v_i\vert^2
$$

전개하면 $i\ne j$ 인 항은 $\mathbb E\thinspace\varepsilon_i\varepsilon_j=0$ 으로 사라진다. $n=2$ 이면 직관 절의 평행사변형 법칙이다. [Hilbert 공간](hilbert-spaces.md)이 type $2$ 이고 cotype $2$ 라는 것이 이 등식이다.

## 정리

$1\le p\le\infty$ 이면 다음이 성립한다[^1].

$$
d(\ell_p^n,\ell_2^n)=n^{\vert 1/p-1/2\vert}
$$

위쪽 한계는 항등사상이다. $p\le2$ 이면 $\Vert x\Vert_2\le\Vert x\Vert_p\le n^{1/p-1/2}\Vert x\Vert_2$ 이고 뒤의 부등식은 Hölder 부등식이다. $p\ge2$ 이면 두 노름의 자리가 바뀐다.

아래쪽 한계는 부호 평균으로 증명된다. $T\colon\ell_p^n\to\ell_2^n$ 을 선형 동형사상이라 하고 $v_i=Te_i$ 로 둔다. 모든 부호 $\varepsilon$ 에서 $\Vert\sum_i\varepsilon_ie_i\Vert_p=n^{1/p}$ 이고 $\Vert e_i\Vert_p=1$ 이다.

- $p\le2$ 이면 $\vert v_i\vert\le\Vert T\Vert$ 이므로 부호 평균의 등식의 오른쪽은 $n\Vert T\Vert^2$ 이하이고, 왼쪽은 $n^{2/p}/\Vert T^{-1}\Vert^2$ 이상이다. 그래서 $\Vert T\Vert^2\Vert T^{-1}\Vert^2\ge n^{2/p-1}$ 이다.
- $p\ge2$ 이면 $\vert v_i\vert\ge1/\Vert T^{-1}\Vert$ 이므로 오른쪽은 $n/\Vert T^{-1}\Vert^2$ 이상이고, 왼쪽은 $\Vert T\Vert^2n^{2/p}$ 이하다. 그래서 $\Vert T\Vert^2\Vert T^{-1}\Vert^2\ge n^{1-2/p}$ 이다.

$p=\infty$ 이면 $d(\ell_\infty^n,\ell_2^n)=\sqrt n$ 이고, Banach–Mazur 거리 문서는 같은 값을 부피 비교로 얻었다.

## ℓ₁ 과 ℓ∞ 사이

거리는 곱셈적 삼각부등식 $d(X,Z)\le d(X,Y)\thinspace d(Y,Z)$ 를 만족하므로 $\ell_2^n$ 을 거치면 $d(\ell_1^n,\ell_\infty^n)\le n$ 이다. 실제 값은 $\sqrt n$ 의 상수배 안에 있다. 성분이 $\pm1$ 이고 행들이 서로 직교하는 $n\times n$ 행렬 $H$, 곧 [Hadamard 행렬](hadamard-matrices.md)이 있으면 $H\colon\ell_1^n\to\ell_\infty^n$ 은 노름이 $1$ 이고, $H^{-1}=H^{\top}/n$ 은 $\ell_\infty^n\to\ell_1^n$ 에서 노름이 $\sqrt n$ 이하다.

$H^{-1}$ 의 노름은 다음 셈이다. $HH^{\top}=nI$ 이므로 $\Vert H^{\top}y\Vert_2=\sqrt n\Vert y\Vert_2$ 이고, [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 두 번 쓰면 다음이 나온다.

$$
\Vert H^{\top}y\Vert_1\le\sqrt n\thinspace\Vert H^{\top}y\Vert_2=n\Vert y\Vert_2\le n\sqrt n\thinspace\Vert y\Vert_\infty
$$

$n$ 으로 나누면 $\Vert H^{-1}y\Vert_1\le\sqrt n\Vert y\Vert_\infty$ 이고, 그래서 $d(\ell_1^n,\ell_\infty^n)\le\sqrt n$ 이다. $\ell_2^n$ 을 거치는 길의 $n$ 보다 직접 가는 길이 훨씬 짧다.

# 활용

- 유한 차원 [Banach 공간](banach-spaces.md)의 국소 이론. $\ell_p^n$ 들 사이의 거리가 공간의 type 과 cotype 을 재는 기준이 되고, 어떤 공간이 $\ell_p^n$ 을 균등하게 포함하는지 판정하는 데 쓰인다.
- 다른 공간 사이의 거리 추정. 곱셈적 삼각부등식으로 $\ell_2^n$ 을 거치면 $d(\ell_p^n,\ell_q^n)$ 이 두 거리의 곱 이하다. $p$ 와 $q$ 가 $2$ 의 같은 쪽에 있으면 항등사상이 더 작은 값 $n^{\vert 1/p-1/q\vert}$ 를 준다.
- 노름 공간 $X$ 와 Euclid 공간의 거리 하한. $X$ 의 단위벡터 $n$ 개가 부호 합에서 $\ell_1^n$ 이나 $\ell_\infty^n$ 처럼 행동하면, 위 증명의 부호 평균 논증이 그대로 $d(X,\ell_2^n)$ 의 하한을 준다.

[^1]: N. Tomczak-Jaegermann, *Banach–Mazur Distances and Finite-Dimensional Operator Ideals*, Pitman Monographs and Surveys in Pure and Applied Mathematics 38, Longman (1989). V. I. Gurarii, M. I. Kadec, V. I. Macaev 가 1960 년대에 증명했다.

# 연관 문서

## 선수지식

- [Banach–Mazur 거리](banach-mazur-distance.md)
- [Rademacher type](rademacher-type.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #combinatorics
