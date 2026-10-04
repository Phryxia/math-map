# Jones–Wenzl 멱등원

# 개요

Jones–Wenzl 멱등원 $f_n$ 은 [Temperley–Lieb 대수](temperley-lieb-algebras.md) $TL_n(\delta)$ 안에서 모든 생성원을 죽이는 유일한 멱등원이다.

$$
f_n^2=f_n,\qquad e_if_n=f_ne_i=0\quad (1\le i\le n-1)
$$

$\delta=q+q^{-1}$ 로 두면 $f_n$ 은 양자 정수 $\lbrack m\rbrack\_q$ 를 계수로 하는 점화식으로 만들어지고, $\lbrack n+1\rbrack\_q=0$ 인 매개변수에서 정의가 끊긴다.

# 직관

$TL_2(\delta)$ 에서 모든 $e_i$ 를 죽이는 멱등원을 직접 찾는다. 기저는 $1$ 과 $e_1$ 이므로 원소를 $a+be_1$ 로 적고 $e_1(a+be_1)=0$ 을 푼다. $e_1^2=\delta e_1$ 이므로 좌변이 $(a+b\delta)e_1$ 이고 조건은 $a+b\delta=0$ 이다.

$a=1$ 로 잡으면 $b=-1/\delta$ 이고 원소는 $f_2=1-\delta^{-1}e_1$ 이다. 제곱하면 $f_2^2=1-2\delta^{-1}e_1+\delta^{-2}\delta e_1=1-\delta^{-1}e_1=f_2$ 로 멱등이다.

$\delta=0$ 에서는 $b$ 를 정할 수 없다. 조건이 $a=0$ 이 되어 $a=1$ 과 어긋나므로 $e_1$ 을 죽이는 멱등원이 아예 없다. 이 값은 $TL_2(\delta)$ 의 반단순성이 깨지는 값과 같고, 멱등원을 $n$ 에 대해 하나씩 세워 가면 매 단계의 분모가 어느 매개변수에서 구조가 깨지는지를 알려준다.

$n$ 을 하나 올릴 때 새 생성원 $e_n$ 만 더 죽이면 되므로, $f_n$ 에서 $f_ne_nf_n$ 방향을 덜어내는 보정 한 번으로 $f\_{n+1}$ 이 나온다. 보정의 계수가 위 계산의 $1/\delta$ 를 일반화한 것이다.

# 정의

## 양자 정수

$\delta=q+q^{-1}$ 에 대해

$$
\lbrack m\rbrack\_q=\frac{q^m-q^{-m}}{q-q^{-1}}=q^{m-1}+q^{m-3}+\dots+q^{1-m}
$$

을 양자 정수라 한다. $q\to 1$ 에서 $\lbrack m\rbrack\_q\to m$ 이고 $\lbrack 2\rbrack\_q=\delta$ 다.

## 점화식

$f_1=1\in TL_1(\delta)$ 로 두고

$$
f\_{n+1}=f_n-\frac{\lbrack n\rbrack\_q}{\lbrack n+1\rbrack\_q}\thinspace f_ne_nf_n
$$

으로 정의한다[^1]. 오른쪽의 $f_n$ 은 $TL_n(\delta)\subset TL\_{n+1}(\delta)$ 의 포함으로 본 것이다. $\lbrack m+1\rbrack\_q\ne 0$ 이 $m\le n$ 에서 성립하는 동안 $f\_{n+1}$ 이 정의된다.

# 성질

## 유일성

> **정리 (Jones, Wenzl).** $\lbrack m\rbrack\_q\ne 0$ 이 $2\le m\le n$ 에서 성립하면 $e_if_n=f_ne_i=0$ 을 모든 $i$ 에 대해 만족하는 멱등원 $f_n\in TL_n(\delta)$ 이 유일하게 존재한다[^1].

증명의 요지. 존재는 점화식이 주는 원소가 조건을 만족함을 $n$ 에 대한 귀납으로 확인하는 것이다. $e_if\_{n+1}$ 에서 $i\lt n$ 이면 $e_if_n=0$ 에서 두 항이 함께 사라지고, $i=n$ 이면 $e_nf_ne_nf_n$ 을 $\lbrack n+1\rbrack\_q/\lbrack n\rbrack\_q$ 배의 $e_nf_n$ 으로 줄이는 계산이 보정 계수와 맞아 상쇄된다. 유일성은 조건을 만족하는 두 멱등원 $f,f'$ 에 대해 $f-f'$ 가 생성원들이 만드는 이념에 들면서 그 이념을 죽이므로 $0$ 임을 보이는 것이다.

## 통과선 성분으로의 사영

세포 구조에서 $TL_n(\delta)$ 를 아래로 내려가지 않는 선의 개수로 걸러 보면 $f_n$ 은 선이 $n$ 개인 층, 곧 통과선을 하나도 잃지 않는 층으로의 사영이다. $e_i$ 를 곱하면 통과선이 줄어들므로 $e_if_n=0$ 이 그 층을 고르는 조건이 된다.

## 양자 차원

$f_n$ 의 Markov 대각합은 $\lbrack n+1\rbrack\_q$ 다[^1]. $q\to 1$ 에서 $n+1$ 로 가고, 이 값이 $\mathrm{SU}(2)$ 의 $n+1$ 차원 기약표현의 차원을 $q$ 로 변형한 것이다.

## Chebyshev 점화식

$\Delta_n=\lbrack n+1\rbrack\_q$ 로 두면 $\Delta\_{n+1}=\delta\Delta_n-\Delta\_{n-1}$ 이 성립한다. $\Delta_n$ 이 $\delta$ 의 다항식으로 제 2 종 Chebyshev 다항식이고, 점화식의 분모가 언제 $0$ 이 되는지를 이 다항식의 근으로 읽는다. 근은 $\delta=2\cos(\pi j/(n+1))$ 꼴이다.

# 활용

## 색칠된 Jones 다항식

매듭의 각 성분에 정수 $n$ 을 붙이고 그 성분을 $n$ 겹으로 평행 복제한 뒤 $f_n$ 을 끼워 넣어 [매듭 불변량](knot-invariants.md)을 계산한다[^2]. $n=1$ 이면 보통 Jones 다항식이고, $n$ 을 올린 족 전체가 색칠된 Jones 다항식이다. $f_n$ 을 끼우지 않으면 복제한 가닥들이 낮은 색의 기여를 섞어 들이므로 멱등원이 색을 분리하는 역할을 한다.

## 모듈러 텐서범주의 단순대상

$q$ 가 $1$ 의 원시 $4\ell$ 제곱근이면 $f_n$ 이 $n\le\ell-2$ 에서만 정의되고, 이 유한한 족이 [Reshetikhin–Turaev 불변량](reshetikhin-turaev.md)을 만드는 범주의 단순대상 목록을 준다[^2]. 정의가 끊기는 자리가 범주를 유한하게 자르는 자리와 같다.

## Kauffman 괄호 스케인 대수

평면 위의 곡선들이 만드는 스케인 대수(skein algebra)에서 $f_n$ 을 넣은 성분을 하나의 선으로 줄여 그리면 계산이 간단해진다[^2]. 3차원 다양체의 불변량을 스케인 대수로 계산할 때 이 축약을 쓴다.

[^1]: 점화식과 유일성은 H. Wenzl, *On sequences of projections*, C. R. Math. Rep. Acad. Sci. Canada **9** (1987), 5–9. 멱등원의 구성은 V. F. R. Jones, *Index for subfactors*, Invent. Math. **72** (1983), 1–25.

[^2]: 색칠된 Jones 다항식과 스케인 계산은 L. Kauffman, S. Lins, *Temperley–Lieb Recoupling Theory and Invariants of 3-Manifolds*, Annals of Math. Studies **134** (1994). 단순대상 목록은 N. Reshetikhin, V. Turaev, *Invariants of 3-manifolds via link polynomials and quantum groups*, Invent. Math. **103** (1991), 547–597.

# 연관 문서

## 선수지식

- [Temperley–Lieb 대수](temperley-lieb-algebras.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #topology #combinatorics
