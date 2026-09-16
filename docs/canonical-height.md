# Néron–Tate 높이와 Mordell–Weil 정리

# 개요

[타원곡선](elliptic-curves.md)의 유리점 전체 $E(\mathbb Q)$ 가 유한생성 아벨군이라는 것이 **Mordell–Weil 정리**다.

$$
E(\mathbb Q)\ \cong\ \mathbb Z^r\ \oplus\ E(\mathbb Q)_{\mathrm{tors}}
$$

증명은 두 부분으로 갈린다. 앞쪽은 **약한 Mordell–Weil 정리**, 곧 $E(\mathbb Q)/2E(\mathbb Q)$ 가 유한하다는 것이고 하강으로 얻는다. 그런데 이것만으로는 부족하다. 유한한 몫이 유한생성을 뜻하려면 "무한히 내려갈 수 없다"는 장치가 하나 더 있어야 한다.

그 장치가 **높이**다. 유리점에 "적는 데 드는 비용"을 재는 실수를 붙이고, 점을 두 배 하면 비용이 네 배가 된다는 것을 보이면 무한강하법이 작동한다. 순진하게 정의한 높이는 이 관계를 오차 범위 안에서만 만족하는데, Tate 의 극한 조작이 오차를 완전히 지운다. 그 결과가 **Néron–Tate 높이** $\hat h$ 이고, 정확한 이차형식이다.

높이는 정리를 닫는 데서 끝나지 않는다. 생성원들의 높이 쌍 행렬식이 조절자 $\mathrm{Reg}_E$ 이고, 이것이 [BSD 추측](birch-swinnerton-dyer.md)의 선행계수에 그대로 들어간다. Gross–Zagier 공식이 $L'(E,1)$ 과 같다고 말하는 대상도 Heegner 점의 정준 높이다.

# 직관

## 높이는 자릿수다

$P=(x,y)\in E(\mathbb Q)$ 에서 $x=p/q$ 를 기약분수로 쓰고

$$
h(P)=\log\max(|p|,|q|)
$$

라 한다. 이것이 **순진한 높이**다. 말 그대로 $x$ 를 적는 데 필요한 자릿수의 로그 규모다. 높이가 $B$ 이하인 유리점은 분자와 분모가 모두 $e^B$ 이하라 유한 개뿐이다. 이 유한성(Northcott 성질)이 나중에 결정적으로 쓰인다.

군 연산과 높이의 관계가 핵심이다. 배가 공식이 $x$ 를 4 차 유리함수로 보내므로

$$
h(2P)=4h(P)+O(1)
$$

이 성립한다. 오차항 $O(1)$ 은 $P$ 에 따라 조금씩 다르지만 곡선마다 정해진 상수로 유계다.

## Tate 의 극한

$O(1)$ 이 거슬린다. 정확한 이차형식이 필요하다. Tate 의 조작은 한 줄이다.

$$
\hat h(P)=\lim_{n\to\infty}\frac{h(2^nP)}{4^n}
$$

수렴하는 이유가 간단하다. $|h(2P)-4h(P)|\le C$ 이면 연속한 두 항의 차가

$$
\left|\frac{h(2^{n+1}P)}{4^{n+1}}-\frac{h(2^nP)}{4^n}\right|\le\frac C{4^{n+1}}
$$

이라 급수가 기하급수적으로 수렴한다. **오차를 $4^n$ 으로 나눠 없애는 것**이 전부다. 극한을 취하고 나면 $\hat h(2P)=4\hat h(P)$ 가 오차 없이 성립하고, 더 나아가 $\hat h(mP)=m^2\hat h(P)$ 와 평행사변형 법칙이 따라 나온다.

37a1 곡선 $y^2+y=x^3-x$ 와 그 생성원 $P=(0,0)$ 에서 수렴을 직접 볼 수 있다.

```python
from fractions import Fraction as F
from math import log

def dbl(P):
    """y^2 + y = x^3 - x 위의 배가"""
    x, y = P
    lam = (3*x*x - 1) / (2*y + 1)
    nu  = (-x**3 - x - y) / (2*y + 1)
    x3 = lam*lam - 2*x
    y3 = -lam*x3 - nu - 1
    return (x3, y3)

def naive_h(P):
    x = P[0]
    return log(max(abs(x.numerator), abs(x.denominator)))

P = (F(0), F(0))
print(' n      2^n P 의 x 좌표 자릿수      h/4^n')
for n in range(0, 9):
    d = len(str(P[0].numerator)) + len(str(P[0].denominator))
    print(f'{n:2d}   {d:8d}   {naive_h(P)/4**n:.10f}')
    P = dbl(P)
```

```
 n      2^n P 의 x 좌표 자릿수      h/4^n
 0          2   0.0000000000
 1          2   0.0000000000
 2          2   0.0433216988
 3          4   0.0502949348
 4         10   0.0511006336
 5         45   0.0511007835
 6        182   0.0511013666
 7        728   0.0511034200
 8       2910   0.0511106493
```

$\hat h(P)=0.05111140\ldots$ 로 수렴한다. 자릿수 열이 이 방법의 한계도 같이 보여준다. $x$ 좌표의 크기가 매번 네 배로 늘어 $n=8$ 에서 이미 삼천 자리다. **정확도는 $4^{-n}$ 로 좋아지는데 비용은 $4^n$ 으로 늘어난다.** 실제 계산에서 Tate 의 극한을 그대로 쓰지 않는 이유다.

## 하강이 닫히는 방식

이제 무한강하법이 돌아간다. $E(\mathbb Q)/2E(\mathbb Q)$ 의 대표원 유한 개를 고르고, 높이가 어떤 경계 $B$ 이하인 점들을 전부 모은다. Northcott 성질로 이 집합은 유한하다. 임의의 $Q\in E(\mathbb Q)$ 를 잡으면

$$
Q=2Q_1+(\text{대표원}),\qquad \hat h(Q_1)\approx\tfrac14\hat h(Q)
$$

이므로 높이가 네 배씩 줄어든다. 유한 번 만에 높이가 $B$ 이하로 내려가고, 거기서 멈춘다. 따라서 위의 유한집합이 $E(\mathbb Q)$ 를 생성한다. **약한 정리에 높이를 더하면 강한 정리가 된다.**

# 정의

## 정준 높이

$$
\hat h(P)=\lim_{n\to\infty}4^{-n}h(2^nP)\ \in\mathbb R_{\ge0}
$$

를 **Néron–Tate 높이** 또는 **정준 높이**라 한다. $\hat h=h+O(1)$ 이고 $\hat h(mP)=m^2\hat h(P)$ 다.

## 높이 쌍과 조절자

$$
\langle P,Q\rangle=\tfrac12\bigl(\hat h(P+Q)-\hat h(P)-\hat h(Q)\bigr)
$$

가 쌍선형이고, 자유 부분 $E(\mathbb Q)\otimes\mathbb R$ 위에서 양정치다. 생성원 $P_1,\dots,P_r$ 에 대해

$$
\mathrm{Reg}_E=\det\bigl(\langle P_i,P_j\rangle\bigr)_{1\le i,j\le r}
$$

가 **조절자**다. 격자 $E(\mathbb Q)/\mathrm{tors}$ 가 얼마나 성긴지를 재는 부피다.

## 국소 분해

$$
\hat h(P)=\sum_{v}\lambda_v(P)
$$

로 각 자리의 기여로 쪼갤 수 있고, $\lambda_v$ 를 **Néron 국소 높이**라 한다. 아르키메데스 자리에서는 타원 로그와 Weierstrass $\sigma$ 함수로, 유한 자리에서는 환원의 성분군 위의 교차수로 주어진다. 실제 계산은 이 분해로 한다. 각 $\lambda_v$ 가 빠르게 수렴하는 급수라 극한 조작보다 훨씬 싸다.

# 성질

## 소멸은 비틀림과 같다

$$
\hat h(P)=0\iff P\ \text{는 비틀림점}
$$

한쪽은 쉽다. $P$ 가 위수 $m$ 이면 $m^2\hat h(P)=\hat h(mP)=\hat h(O)=0$ 이다. 반대쪽은 Northcott 성질에서 나온다. $\hat h(P)=0$ 이면 모든 $nP$ 의 높이가 0 이라 유계이고, 높이 유계인 점은 유한 개뿐이므로 $\lbrace nP\rbrace$ 가 유한집합이며 $P$ 는 유한 위수다. **높이가 비틀림 판정 도구가 된다.**

## 아래에서 얼마나 멀어지는가

비틀림이 아닌 점의 높이에 0 이 아닌 하한이 있는지는 미묘한 문제다. Lang 이 도체에 비례하는 하한

$$
\hat h(P)\ \gg\ \log|\Delta_E|
$$

을 추측했고, 여기서 $\gg$ 의 상수가 곡선에 의존하지 않아야 한다는 것이 요점이다. 이 추측이 참이면 순위가 큰 곡선의 조절자가 아래로 유계가 되어 BSD 선행계수의 크기를 통제할 수 있다. 부분 결과만 알려져 있다.

## 계산 비용

위의 실험이 보여주듯 극한 정의는 계산에 쓸 수 없다. 표준 알고리즘은 국소 분해를 쓰고, 각 $\lambda_v$ 를 몇십 자리까지 얻는 데 상수 시간이 든다. Silverman 과 Cremona 의 구현이 이 방식이고, 순위가 큰 곡선의 조절자도 실용적으로 계산된다.

# 활용

## BSD 의 선행계수

강한 BSD 가 예측하는 $L$ 함수의 $s=1$ 선행계수는

$$
\frac{L^{(r)}(E,1)}{r!}=\frac{\Omega_E\cdot\mathrm{Reg}_E\cdot\char35{}\text{Ш}\cdot\prod_p c_p}{\bigl(\char35{}E(\mathbb Q)_{\mathrm{tors}}\bigr)^2}
$$

이다. 좌변을 수치로 계산하고 $\mathrm{Reg}_E$ 를 포함한 우변의 다른 인자를 모두 구하면 $\char35{}\text{Ш}$ 의 예측값이 나온다. 이 값이 항상 완전제곱수 근처의 정수로 떨어진다는 사실이 공식의 정합성 검사가 되는데, 검사가 성립하려면 조절자를 충분한 정확도로 계산할 수 있어야 한다. **높이 계산의 정밀도가 곧 BSD 수치 검증의 정밀도다.**

## Gross–Zagier 공식

$$
L'(E,1)=c\cdot\hat h(P_K)
$$

꼴로 $L$ 함수의 미분이 Heegner 점의 정준 높이와 같다. 좌변은 해석적, 우변은 산술적이다. 증명의 뼈대가 양변을 국소 항으로 쪼개 자리마다 맞추는 것이고, 우변의 국소 항이 바로 Néron 국소 높이 $\lambda_v$ 다. 국소 분해가 없으면 공식을 진술할 수는 있어도 증명할 방법이 없다.

## 높이와 정수점

Baker 의 방법으로 타원곡선 위 정수점의 크기에 유효한 상한을 주고, 정준 높이의 하한과 결합하면 정수점을 **전부** 찾았다고 증명할 수 있다. 격자 축소로 후보를 걸러내는 이 절차가 Diophantine 방정식 풀이의 표준 도구다. 높이가 상한과 하한 양쪽에서 탐색 공간을 닫는다.

[^1]: 구성과 증명은 J. Silverman, *The Arithmetic of Elliptic Curves* (2판, 2009) 8장. 국소 분해와 계산 알고리즘은 같은 저자의 *Advanced Topics in the Arithmetic of Elliptic Curves* (1994) 6장, 그리고 J. Cremona, *Algorithms for Modular Elliptic Curves* (2판, 1997) 3장. Lang 의 하한 추측은 S. Lang, *Elliptic Curves: Diophantine Analysis* (1978). Gross–Zagier 는 B. Gross, D. Zagier, *Heegner points and derivatives of L-series*, Invent. Math. **84** (1986). 본문의 수렴 실험은 직접 한 것이다.

# 연관 문서

## 선수지식

- [타원곡선과 군 구성](elliptic-curves.md)

## 더 알아보기

- [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)

#number_theory #computation #theorem
