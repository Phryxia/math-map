# 과수렴 모듈러 기호와 p 진 L 함수

# 개요

[모듈러 기호](modular-symbols.md)는 계수를 어디에 두느냐를 고를 수 있는 구성이다. 무게 $k$ 의 고전 이론은 계수 가군으로 차수 $k-2$ 이하의 다항식 공간 $V_{k-2}$ 를 쓴다. 유한 차원이고, 그래서 선형대수로 다룰 수 있다.

Pollack 과 Stevens 는 이 계수를 **$p$ 진 분포 공간** $\mathcal D_k$ 로 바꿨다. $\mathbb Z_p$ 위의 국소해석함수에 대한 연속 쌍대이고 무한 차원이다. 무한 차원으로 옮겨 가면서 얻는 것이 하나 있다.

$$
\mathrm{Symb}_\Gamma(\mathcal D_k)\ \xrightarrow{\ \rho\ }\ \mathrm{Symb}_\Gamma(V_{k-2})
$$

이 **특수화 사상** $\rho$ 가 $U_p$ 의 기울기가 작은 부분에서 동형이라는 것이 **Stevens 의 조절 정리**다. 고전 고유기호 하나를 골라 유일하게 위로 올릴 수 있고, 올린 기호가 담고 있는 분포를 $\mathbb Z_p^\times$ 로 제한하면 그것이 곧 $p$ 진 $L$ 함수다.

의미가 큰 것은 계산 쪽이다. $p$ 진 $L$ 함수는 원래 고전 $L$ 값들을 보간해서 **존재를 증명하는** 대상이었다. 과수렴 기호는 같은 것을 **유한 번의 선형대수로 만들어낸다.** [$p$ 진수](p-adic-numbers.md) 위의 수렴이 기하급수적이라 자릿수를 원하는 만큼 얻을 수 있고, 덕분에 Iwasawa 이론의 $\lambda,\mu$ 불변량을 실제로 표로 만드는 일이 가능해졌다.

# 직관

## 무한 차원인데 왜 다룰 수 있는가

$\mathcal D_k$ 는 무한 차원이지만 $U_p$ 작용소가 **콤팩트**하다. 콤팩트 작용소의 스펙트럼은 0 으로 몰려가는 고유값들이고, $p$ 진에서 이 말은 고유값의 부치가 무한대로 간다는 뜻이다. 따라서 기울기(고유값의 $p$ 진 부치)를 하나 고정하면

$$
\mathrm{Symb}_\Gamma(\mathcal D_k)^{\le h}\quad\text{는 유한 차원}
$$

이다. 무한 차원 공간을 통째로 다루는 것이 아니라, 기울기 $h$ 이하 조각만 떼어내 유한 차원 문제로 만든다. [Newton 다각형](newton-polygon.md)이 Fredholm 행렬식의 기울기를 읽어 그 조각의 차원을 알려준다.

## 왜 작은 기울기에서만 올라가는가

특수화 $\rho$ 의 핵과 여핵을 보면 이유가 드러난다. 분포를 다항식 위의 값만 기억하도록 자를 때 버려지는 부분, 곧 차수 $k-1$ 이상의 모멘트들에는 $U_p$ 가 $p^{k-1}$ 이상의 인자를 달고 작용한다. 그래서 핵과 여핵 위에서 $U_p$ 의 기울기는 항상 $\ge k-1$ 이다.

$$
h<k-1\ \Longrightarrow\ \rho:\ \mathrm{Symb}_\Gamma(\mathcal D_k)^{\le h}\ \xrightarrow{\ \sim\ }\ \mathrm{Symb}_\Gamma(V_{k-2})^{\le h}
$$

기울기가 작은 쪽에서는 잘려 나간 부분이 $U_p$ 에 의해 완전히 짓눌려 보이지 않는다. **조절 정리는 "작은 기울기에서는 자른 정보가 자동으로 복원된다"는 진술이다.** $h=0$ 인 순종(ordinary) 경우가 Hida 이론의 조절 정리이고, Stevens 의 판본은 그것을 유한 기울기로 넓힌 것이다.

## 올림을 실제로 찾는 방법

조절 정리는 올림의 존재와 유일성만 말한다. 찾는 방법은 따로 있는데, 놀랍도록 단순하다. **아무 올림이나 잡고 $U_p$ 를 반복 적용하면 된다.**

임의의 $\Phi_0$ 를 $\rho(\Phi_0)=\phi$ 가 되도록 잡으면, $\Phi_0$ 는 원하는 고유기호에 "쓰레기"가 섞인 것이다. 쓰레기는 기울기가 큰 성분이라 $U_p$ 를 한 번 적용할 때마다 $p$ 배씩 작아진다. 기울기 차이가 수렴 속도를 준다.

$$
\Phi_n=\alpha^{-n}U_p^{\,n}\Phi_0\ \longrightarrow\ \Phi,
\qquad
\bigl|\Phi_n-\Phi\bigr|\ \le\ |p|^{\,n(k-1-h)}
$$

2 차원 장난감으로 이 수렴을 그대로 볼 수 있다. 기울기 0 과 기울기 1 의 고유값을 가진 행렬에 벡터를 반복 곱하면, 기울기 1 쪽 성분의 $p$ 진 부치가 한 번에 1 씩 올라간다.

```python
p, N = 5, 14
mod = p**N

def val(x, p, N):
    if x % mod == 0: return N
    v = 0
    while x % p == 0:
        x //= p; v += 1
    return v

A = [[1, 1], [0, p]]          # 고윳값 1 (기울기 0) 과 p (기울기 1)
v = [1, 1]                    # 두 성분이 섞인 시작 벡터

print('n  정규화한 벡터의 둘째 좌표      부치')
for n in range(1, 9):
    v = [(A[0][0]*v[0] + A[0][1]*v[1]) % mod,
         (A[1][0]*v[0] + A[1][1]*v[1]) % mod]
    w1 = (v[1] * pow(v[0], -1, mod)) % mod
    print(f'{n}  {w1:>16d}  {val(w1,p,N)}')
```

```
n  정규화한 벡터의 둘째 좌표      부치
1        3051757815  1
2        5231584825  2
3        2098083500  3
4        1166276875  4
5        2708337500  5
6        2604187500  6
7        2034609375  7
8        4069531250  8
```

부치가 정확히 $n$ 씩 올라간다. 원하는 자릿수가 있으면 반복 횟수를 그만큼만 돌리면 된다는 뜻이고, 이것이 알고리즘의 종료 조건이 된다. 실제 과수렴 기호에서는 분포의 모멘트를 유한 개로 잘라 같은 반복을 돌린다.

# 정의

## 분포 공간

$\mathcal A_k$ 를 $\mathbb Z_p$ 위의 국소해석함수 공간, $\mathcal D_k=\mathcal A_k^\vee$ 를 그 연속 쌍대라 한다. 반군

$$
\Sigma_0(p)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in M_2(\mathbb Z_p):\ p\mid c,\ p\nmid a,\ ad-bc\ne0\right\}
$$

가 무게 $k$ 작용

$$
(\gamma\cdot f)(z)=(a+cz)^{k-2}\,f\!\left(\frac{b+dz}{a+cz}\right)
$$

로 $\mathcal A_k$ 에 작용하고, 쌍대로 $\mathcal D_k$ 에 작용한다. 분포 $\mu$ 는 모멘트 열 $\bigl(\mu(1),\mu(z),\mu(z^2),\dots\bigr)$ 로 결정되고, 계산에서는 이 열을 앞의 $M$ 개로 자른다.

## 모듈러 기호

$\Delta_0=\mathrm{Div}^0(\mathbb P^1(\mathbb Q))$ 라 하면

$$
\mathrm{Symb}_\Gamma(D)=\mathrm{Hom}_\Gamma(\Delta_0,\ D)
$$

이다. $D=V_{k-2}$ 면 고전 모듈러 기호, $D=\mathcal D_k$ 면 **과수렴 모듈러 기호**다.

## 특수화와 조절 정리

$V_{k-2}\subset\mathcal A_k$ 이므로 쌍대로 $\mathcal D_k\twoheadrightarrow V_{k-2}^\vee\cong V_{k-2}$ 가 있고, 이를 계수에 적용한 것이 $\rho$ 다.

> **조절 정리 (Stevens).** $h<k-1$ 이면 $\rho$ 는 기울기 $\le h$ 부분공간 사이의 동형이다.

## $p$ 진 $L$ 함수

$\phi$ 를 무게 $k$ 와 준위 $\Gamma_0(Np)$ 의 고유기호, $\Phi$ 를 그 유일한 과수렴 올림이라 한다. 분포

$$
\mu_\Phi=\Phi\bigl(\{\infty\}-\{0\}\bigr)\ \in\ \mathcal D_k
$$

를 $\mathbb Z_p^\times$ 로 제한하면 측도가 되고,

$$
L_p(\phi,s)=\int_{\mathbb Z_p^\times}\langle x\rangle^{\,s-1}\,d\mu_\Phi(x)
$$

가 $p$ 진 $L$ 함수다. 고전 $L$ 값과의 보간 관계는 정리로 따라 나온다. 구성 자체에는 보간이 들어가지 않는다.

# 성질

## 기울기가 조건을 정한다

$h<k-1$ 은 버릴 수 없는 조건이다. $h=k-1$ 인 임계 기울기(critical slope)에서는 $\rho$ 가 동형이 아니고 올림이 유일하지 않다. 이 자리에 사는 것이 **임계 $p$ 안정화**이고, Pollack–Stevens 와 Bellaïche 가 그 경우에도 올림을 고르는 방법을 따로 마련했다. 무게 2 의 순종 곡선은 $h=0<1=k-1$ 이라 조건을 여유 있게 만족한다.

## Iwasawa 불변량

$\mu_\Phi$ 를 Iwasawa 대수 $\mathbb Z_p[[T]]$ 의 멱급수로 옮기면 $\lambda$ 와 $\mu$ 불변량이 정의된다. Newton 다각형에서 읽는 이 두 수가 [Iwasawa 주추측](iwasawa-main-conjecture.md)의 양변을 비교하는 자리에 놓인다. 과수렴 기호 알고리즘이 나오기 전에는 이 수들을 낮은 준위에서만 알 수 있었다. 지금은 표를 만들어 추측을 수치적으로 검증한다. **추측을 증명하는 도구가 아니라 추측을 시험하는 도구**라는 점에서 이 이론의 가치가 독특하다.

## 예외적 0 과 $L$ 불변량

$a_p=1$ 인 분열 곱셈적 환원의 경우, 보간 공식의 Euler 인자 $1-a_p^{-1}$ 이 0 이 되어 $L_p$ 가 $s=1$ 에서 자동으로 소멸한다. 고전 $L$ 값이 0 이 아닌데도 $p$ 진 쪽이 0 인 이 현상을 **예외적 0** 이라 한다. Mazur–Tate–Teitelbaum 은 그 자리의 미분이

$$
L_p'(E,1)=\mathcal L_p(E)\cdot\frac{L(E,1)}{\Omega_E}
$$

꼴이라고 추측했고, $\mathcal L_p$ 를 **$L$ 불변량**이라 부른다. Greenberg 와 Stevens 의 증명이 무게를 변수로 움직이는 과수렴 기호의 족을 만들어 무게 방향 미분을 계산하는 방식이었다. 고정된 무게에서는 보이지 않던 양이 족 안에서 드러난다.

# 활용

## 타원곡선의 p 진 BSD 실험

$E/\mathbb Q$ 와 소수 $p$ 를 주면 무게 2 기호에서 $L_p(E,s)$ 의 계수를 뽑을 수 있다. $s=1$ 에서의 소멸 차수를 읽어 $p$ 진 BSD 추측이 예측하는 계수 $\mathrm{rank}\thinspace E(\mathbb Q)$ 와 맞는지 확인하고, 주항에서 $p$ 진 조절자와 Tate–Shafarevich 군의 $p$ 부분을 읽는다. 고전 BSD 와 달리 양변이 모두 유한 계산으로 접근 가능해서, 수치 실험의 범위가 훨씬 넓다.

## Sage 의 구현

Pollack–Stevens 알고리즘은 Sage 에 들어 있다. 입력은 타원곡선과 소수, 출력은 정해진 정확도의 $p$ 진 $L$ 급수다. 내부는 모멘트를 $M$ 개로 자른 분포 위에서 위의 반복을 $O(M)$ 번 돌리는 것이고, 각 단계가 $\mathbb Z/p^M$ 위의 행렬 연산이라 비용이 예측 가능하다.

## 다른 군으로의 이식

같은 틀이 Bianchi 모듈러 기호(허수이차체), Hilbert 모듈러 기호(전실체), 고차 $\mathrm{GL}_n$ 의 중복 기호로 옮겨 간다. 필요한 것은 두 가지뿐이다. 계수를 분포로 바꿀 수 있어야 하고, $U_p$ 가 콤팩트해야 한다. 이 둘이 성립하면 조절 정리의 증명 구조가 그대로 따라온다. 고유다양체 위에서 $p$ 진 $L$ 함수의 족을 만드는 현대적 구성도 뿌리가 여기다.

[^1]: R. Pollack, G. Stevens, *Overconvergent modular symbols and p-adic L-functions*, Ann. Sci. ÉNS **44** (2011), 1–42. 임계 기울기 쪽은 같은 저자의 *Critical slope p-adic L-functions*, J. London Math. Soc. **87** (2013). 조절 정리의 원형은 G. Stevens 의 미출판 원고 *Rigid analytic modular symbols* (2000). 예외적 0 은 B. Mazur, J. Tate, J. Teitelbaum, *On p-adic analogues of the conjectures of Birch and Swinnerton-Dyer*, Invent. Math. **84** (1986), 증명은 R. Greenberg, G. Stevens, *p-adic L-functions and p-adic periods of modular forms*, Invent. Math. **111** (1993). 본문의 수렴 실험은 직접 한 것이다.

# 연관 문서

## 선수지식

- [모듈러 기호](modular-symbols.md)
- [p 진수와 부치](p-adic-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #computation #field_theory
