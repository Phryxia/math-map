# Nordsieck 표현

# 개요

**Nordsieck 표현(Nordsieck representation)** 은 [선형 다단계 방법](linear-multistep-methods.md)이 기억하는 지나온 값들 대신, 현재 점에서의 해의 값과 걸음 크기로 척도를 맞춘 도함수들을 저장하는 방식이다. 다단계 방법은 같은 간격으로 놓인 지나온 값들을 쓰므로, 풀다가 걸음을 반으로 줄이면 반 걸음 앞의 값이 저장되어 있지 않다. Nordsieck 표현에서는 걸음을 바꿀 때 저장된 성분마다 걸음 비의 거듭제곱을 곱하기만 하면 된다.

# 직관

[예측자–수정자 방법](predictor-corrector-methods.md) 문서처럼 $x'=x$, $x(0)=1$ 을 걸음 $h=0.1$ 로 푼다. 2 단계 Adams–Moulton 공식은 다음과 같다.

$$
x\_{n+1}=x\_n+\frac h{12}\bigl(5f\_{n+1}+8f\_n-f\_{n-1}\bigr)
$$

$t=0.1$ 에서 걸음을 $0.05$ 로 줄이기로 하면, 이 공식은 $t=0.05$ 의 기울기를 요구한다. 저장된 것은 $t=0$ 과 $t=0.1$ 의 값뿐이므로 공식을 그대로 쓸 수 없다.

지나온 두 점의 값과 기울기는 $t=0.1$ 근처의 이차식 하나를 정한다. 그 이차식을 $t=0.1$ 에서 Taylor 전개해 계수를 저장한다. 계수에 걸음의 거듭제곱을 곱해 다음 벡터로 둔다.

$$
z=\Bigl(x,\thinspace hx',\thinspace \frac{h^2}{2}x''\Bigr)=(1.105171,\thinspace 0.110517,\thinspace 0.005526)
$$

걸음을 $0.05$ 로 줄이면 $hx'$ 는 $1/2$ 배, $h^2x''/2$ 는 $1/4$ 배가 된다. 그래서 새 벡터는 다음과 같고, 반 걸음 앞의 값을 따로 구할 필요가 없다.

$$
z=(1.105171,\thinspace 0.055259,\thinspace 0.001381)
$$

걸음을 $h=0.1$ 로 유지하면, 한 걸음 나아가는 계산은 두 단계다. 먼저 이차식을 $t=0.2$ 로 옮긴다. 세 성분의 합 $1.221214$ 가 $t=0.2$ 에서의 예측값이고, 참값 $e^{0.2}=1.221403$ 보다 $0.000189$ 작다.

예측값에서 기울기를 다시 재면 $0.1221214$ 이고, 옮긴 이차식의 기울기 성분 $0.1215688$ 과 $e=0.0005526$ 만큼 어긋난다. 이 어긋남에 $5/12$ 를 곱해 예측값에 더하면 $1.221444$ 가 되고 오차는 $0.000041$ 이다. 이렇게 척도를 맞춘 도함수를 저장하고, 예측과 어긋남의 보정으로 나아가는 표현을 Nordsieck 표현이라 한다.

# 정의

## Nordsieck 벡터

$t\_n$ 에서 해 $x$ 의 근삿값을 $q$ 계 도함수까지 담은 다음 벡터를 차수 $q$ 의 **Nordsieck 벡터(Nordsieck vector)** 라 한다.

$$
z\_n=\Bigl(x\_n,\thinspace hx\_n',\thinspace \frac{h^2}{2!}x\_n'',\thinspace \dots,\thinspace \frac{h^q}{q!}x\_n^{(q)}\Bigr)
$$

성분 $z\_{n,j}$ 는 $x$ 의 $t\_n$ 에서의 Taylor 계수에 $h^j$ 를 곱한 것이다. 직관 절의 벡터는 $q=2$ 다.

## 예측과 보정

$(q+1)\times(q+1)$ 행렬 $P$ 를 $i\le j$ 에서 $P\_{ij}=\binom ji$, $i\gt j$ 에서 $0$ 으로 정한다($0\le i,j\le q$). $P$ 는 다항식 $\sum\_j z\_js^j$ 를 $s\mapsto s+1$ 로 옮긴 계수를 준다. 벡터 $\ell=(\ell\_0,\ell\_1,\dots,\ell\_q)$ 를 $\ell\_1=1$ 로 고르고, 다음 계산을 한 걸음으로 하는 방법을 **Nordsieck 방법(Nordsieck method)** 이라 한다.[^1]

$$
z\_{n+1}^{\lbrack 0\rbrack}=Pz\_n,\qquad e=hf(t\_{n+1},x\_{n+1})-z\_{n+1,1}^{\lbrack 0\rbrack},\qquad z\_{n+1}=z\_{n+1}^{\lbrack 0\rbrack}+\ell e
$$

$x\_{n+1}=z\_{n+1,0}$ 이 $e$ 에 들어 있으므로 셋째 식은 $x\_{n+1}$ 에 대한 방정식이다. $\ell\_1=1$ 이면 보정 뒤의 둘째 성분이 $hf(t\_{n+1},x\_{n+1})$ 과 같아진다.

직관 절의 계산은 $q=2$, $\ell=(5/12,1,1/2)$ 이고, $e$ 의 $x\_{n+1}$ 자리에 예측값을 넣어 방정식 대신 한 번의 평가로 끝냈다.

## 걸음 바꾸기

걸음을 $h$ 에서 $\alpha h$ 로 바꿀 때는 $z\_n$ 의 $j$ 번째 성분에 $\alpha^j$ 를 곱한다. 직관 절의 $\alpha=1/2$ 가 그 예다.

# 성질

## 다단계 방법과의 동치

걸음 크기가 일정하면, $\ell$ 을 알맞게 고른 Nordsieck 방법은 다단계 방법과 같은 $x\_n$ 을 낸다. 차수 $q$ 에서 다음이 성립한다.[^2]

| ℓ | 같은 방법 |
| --- | --- |
| $(1,1)$ | 음함수 [Euler 방법](euler-method.md) |
| $(1/2,1)$ | 사다리꼴 규칙 |
| $(5/12,1,1/2)$ | 2 단계 Adams–Moulton 공식 |
| $(2/3,1,1/3)$ | 2 단계 [후진 차분 공식](backward-differentiation-formulas.md) |

$q=1$, $\ell=(1/2,1)$ 이면 $z\_n=(x\_n,hf\_n)$ 이고 다음이 나와 사다리꼴 규칙이다.

$$
x\_{n+1}=x\_n+hf\_n+\frac12\bigl(hf\_{n+1}-hf\_n\bigr)=x\_n+\frac h2\bigl(f\_n+f\_{n+1}\bigr)
$$

일반적으로 $k$ 단계 Adams–Moulton 공식과 $k$ 단계 후진 차분 공식은 각각 $q=k$ 의 $\ell$ 하나와 대응한다. 두 표현은 같은 다항식을 지나온 값으로 적느냐 한 점의 도함수로 적느냐의 차이이고, 그 사이는 가역인 선형 변환이다.

## 걸음을 바꾼 뒤의 방법

걸음을 바꾼 뒤의 Nordsieck 방법은 같은 걸음 비로 만든 가변 걸음 다단계 공식과 일치하지 않는다. 걸음을 자주 크게 바꾸면 안정성이 나빠질 수 있어, 실제 해법은 걸음 비를 제한하고 같은 걸음을 몇 번 유지한 뒤에 다시 바꾼다.[^2]

## 차수 바꾸기

차수를 $q$ 에서 $q-1$ 로 낮출 때는 마지막 성분을 버린다. 올릴 때는 다음 성분을 덧붙인다.

$$
z\_{n,q+1}\approx\frac{z\_{n,q}-z\_{n-1,q}}{q+1}
$$

$z\_{n,q}-z\_{n-1,q}$ 가 $h^{q+1}x^{(q+1)}/q!$ 의 근사이기 때문이다. 같은 차분은 다음 차수의 오차 항 크기도 어림하므로, 차수 $q-1$, $q$, $q+1$ 의 오차 어림을 견주어 차수를 고른다.

## 오차 어림

어긋남 $e$ 는 예측자와 수정자의 차에 비례한다. [예측자–수정자 방법](predictor-corrector-methods.md)의 Milne 장치(Milne's device)와 같이 $e$ 에 상수를 곱해 한 걸음 오차를 어림하고, 그 값으로 걸음 크기를 고른다.

# 활용

- 가변 걸음 가변 차수 해법. Gear 의 DIFSUB, 그리고 그것을 이은 LSODE(Livermore solver for ordinary differential equations)와 CVODE 는 Adams 방법과 후진 차분 공식을 Nordsieck 표현으로 구현해, 걸음과 차수를 걸음마다 고른다.[^3]
- 사이 값의 출력. 걸음 사이의 점 $t\_n+\theta h$ 에서 해를 다항식 $\sum\_j z\_{n,j}\theta^j$ 로 바로 계산한다. 출력 시각에 맞춰 걸음을 자르지 않아도 된다.
- 사건 찾기. 같은 다항식의 근을 구해 해가 정해진 값을 지나는 시각을 걸음 사이에서 찾는다.

[^1]: A. Nordsieck, "On numerical integration of ordinary differential equations", *Mathematics of Computation* 16 (1962), 22–49.

[^2]: E. Hairer, S. P. Nørsett, G. Wanner, *Solving Ordinary Differential Equations I*, 2nd ed., Springer (1993), III.6 절. C. W. Gear, *Numerical Initial Value Problems in Ordinary Differential Equations*, Prentice-Hall (1971), 9 장.

[^3]: A. C. Hindmarsh, "ODEPACK, a systematized collection of ODE solvers", in *Scientific Computing*, IMACS Transactions on Scientific Computation 1 (1983), 55–64.

# 연관 문서

## 선수지식

- [예측자–수정자 방법](predictor-corrector-methods.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #algorithms
