# ENO 방법

# 개요

**ENO 방법(essentially non-oscillatory scheme, ENO scheme)** 은 칸 안의 값을 다항식으로 놓을 때, 그 다항식을 맞출 이웃 칸들을 값이 가장 매끄럽게 이어지는 쪽에서 하나씩 골라 오는 유한 부피 방법이다. [MUSCL 방법](muscl-method.md)은 계단 앞의 봉우리를 막으려고 매끄러운 언덕의 꼭대기에서도 기울기를 $0$ 으로 두어, 언덕을 옮길수록 꼭대기가 깎인다. ENO 방법은 꼭대기에서도 매끄러운 쪽의 칸으로 다항식을 맞춰 높은 차수를 유지하고, 계단 근처에서는 계단 건너편 칸을 고르지 않아 봉우리를 만들지 않는다.

# 직관

칸 너비 $h=1$ 인 칸 $0,1,2,3,4$ 의 평균이 $0,2,4,3,1$ 인 언덕이 있다. 칸 $2$ 가 꼭대기이고, 왼쪽 차이는 $4-2=2$, 오른쪽 차이는 $3-4=-1$ 이다.

MUSCL 방법의 minmod 기울기는 두 차이의 부호가 달라 칸 $2$ 의 기울기를 $0$ 으로 둔다. 그러면 칸 $2$ 는 상수 $4$ 로 계산되어 [Godunov 방법](godunov-method.md)과 같은 1 차 계산이 된다. 언덕이 움직이는 동안 꼭대기 칸은 걸음마다 이렇게 계산되고, 꼭대기가 깎인다.

기울기를 $0$ 으로 두는 대신 두 차이 가운데 절댓값이 작은 쪽을 고른다. 칸 $2$ 에서는 $\vert -1\vert\lt\vert 2\vert$ 라 오른쪽 차이 $-1$ 을 기울기로 쓰고, 칸 양 끝의 값은 $4.5$ 와 $3.5$ 다. 차이가 작은 쪽이 값이 덜 급하게 변하는 쪽이다.

같은 고르기를 한 칸씩 더 할 수 있다. 칸 $2$ 와 칸 $3$ 을 골라 놓고, 칸 $1$ 을 더할지 칸 $4$ 를 더할지는 이차 차이로 정한다. 칸 $1,2,3$ 의 이차 차이는 $2-2\cdot 4+3=-3$ 이고 칸 $2,3,4$ 의 이차 차이는 $4-2\cdot 3+1=-1$ 이라, 절댓값이 작은 칸 $4$ 를 더한다. 평균이 $4,3,1$ 이 되는 이차식을 칸 $2,3,4$ 에 맞추면 칸 $2$ 의 오른쪽 끝 값은 $11/3$ 이다.

계단에서는 같은 규칙이 계단 건너편 칸을 고르지 않는다. 칸 $0,1,2,3$ 의 평균이 $1,1,1,0$ 이면 칸 $2$ 의 왼쪽 차이는 $0$, 오른쪽 차이는 $-1$ 이라 칸 $1$ 을 고르고, 다음 이차 차이도 칸 $0,1,2$ 쪽이 $0$ 이라 칸 $0$ 을 고른다. 칸 $2$ 의 다항식은 상수 $1$ 이고, 계단 앞에 봉우리가 생기지 않는다.

# 정의

## 칸 평균의 다항식 재구성

칸 $j$ 의 구간을 $I\_j=\lbrack x\_{j-1/2},x\_{j+1/2}\rbrack$, 평균을 $U\_j$ 라 한다. 이어진 $k$ 개의 칸 $S=\lbrace i,i+1,\dots,i+k-1\rbrace$ 를 **스텐실(stencil)** 이라 한다. 차수가 $k-1$ 이하이고 다음을 만족하는 다항식 $p\_S$ 는 하나뿐이다.

$$
\frac1h\int\_{I\_m}p\_S(x)\thinspace dx=U\_m\qquad(m\in S)
$$

직관 절의 스텐실 $\lbrace 2,3,4\rbrace$ 에서 $p\_S(x\_{5/2})$ 는 다음과 같다.

$$
p\_S\bigl(x\_{5/2}\bigr)=\frac13U\_2+\frac56U\_3-\frac16U\_4=\frac43+\frac52-\frac16=\frac{11}{3}
$$

## 스텐실 고르기

칸 평균의 차이를 다음처럼 거듭 정의한다. $l$ 차 차이 $\Delta^l\_m$ 은 칸 $m,\dots,m+l$ 의 평균으로 정해진다.

$$
\Delta^1\_m=U\_{m+1}-U\_m,\qquad \Delta^{l+1}\_m=\Delta^l\_{m+1}-\Delta^l\_m
$$

칸 $j$ 의 **ENO 스텐실(ENO stencil)** 은 $\lbrace j\rbrace$ 에서 시작해, 지금 스텐실 $\lbrace i,\dots,i+l-1\rbrace$ 의 왼쪽에 칸을 더한 것과 오른쪽에 칸을 더한 것 가운데 $l$ 차 차이의 절댓값이 작은 쪽을 고르는 일을 $k$ 개가 될 때까지 되풀이해 얻는다.[^1]

```javascript
// U: 칸 평균, j: 칸 번호, k: 스텐실 크기
function enoStencil(U, j, k) {
  let i = j; // 스텐실의 왼쪽 끝
  for (let l = 1; l < k; l++) {
    const left = diff(U, i - 1, l); // 칸 i-1 .. i+l-1 의 l 차 차이
    const right = diff(U, i, l); // 칸 i .. i+l 의 l 차 차이
    if (Math.abs(left) < Math.abs(right)) i = i - 1;
  }
  return [i, i + k - 1];
}
```

직관 절의 칸 $2$ 는 $l=1$ 에서 $\vert\Delta^1\_1\vert=2$ 와 $\vert\Delta^1\_2\vert=1$ 을 견주어 칸 $3$ 을 더하고, $l=2$ 에서 $\vert\Delta^2\_1\vert=3$ 과 $\vert\Delta^2\_2\vert=1$ 을 견주어 칸 $4$ 를 더한다.

## ENO 방법

칸마다 ENO 스텐실의 다항식 $p\_j$ 로 경계값 $U^-\_{j+1/2}=p\_j(x\_{j+1/2})$, $U^+\_{j-1/2}=p\_j(x\_{j-1/2})$ 를 만든다. 경계 $x\_{j+1/2}$ 에서 왼쪽 값 $U^-\_{j+1/2}$ 과 오른쪽 값 $U^+\_{j+1/2}$ 로 수치 플럭스 $F\_{j+1/2}$ 를 계산하고, 다음 연립 [상미분방정식](ordinary-differential-equations.md)을 시간 방향으로 푸는 방법을 $k$ 차 **ENO 방법** 이라 한다.[^1][^2]

$$
\frac{d}{dt}U\_j=-\frac1h\bigl(F\_{j+1/2}-F\_{j-1/2}\bigr)
$$

$k=2$ 이면 스텐실 고르기가 두 차이 가운데 절댓값이 작은 쪽을 기울기로 쓰는 것과 같다. 이것이 직관 절의 기울기 $-1$ 이다.

# 성질

## 정확도

칸 평균이 매끄러운 함수에서 왔으면 어느 스텐실의 다항식이든 경계값의 오차가 $O(h^k)$ 다. 그래서 $k$ 차 ENO 방법은 해가 매끄러운 곳에서 극값을 포함해 $k$ 차 정확도를 갖는다.[^1] minmod 기울기를 쓴 MUSCL 방법이 극값에서 1 차로 떨어지는 것과 다른 점이다.

## 전체 변동

ENO 방법은 [전체 변동 감소 방법](tvd-schemes.md)이 아니다. 극값 근처에서 재구성한 경계값이 칸 평균의 범위를 조금 넘을 수 있어 전체 변동이 늘 수 있다. Harten 등은 재구성한 함수의 전체 변동이 칸 평균의 전체 변동보다 많아야 $O(h^k)$ 크다는 것을 보였고, 이름의 "본질적으로 진동하지 않는(essentially non-oscillatory)" 은 이 증가가 격자가 작아지면 사라진다는 뜻이다.[^1]

## 부호 성질

경계 $x\_{j+1/2}$ 에서 재구성한 두 값의 차이는 다음이다.

$$
\delta\_{j+1/2}=U^+\_{j+1/2}-U^-\_{j+1/2}
$$

$\delta\_{j+1/2}$ 는 $0$ 이거나 이웃 평균의 차이 $U\_{j+1}-U\_j$ 와 부호가 같다. 또 그 절댓값은 $k$ 에만 달린 상수 배의 $\vert U\_{j+1}-U\_j\vert$ 이하다.[^3] 이 성질과 엔트로피 안정한 플럭스를 함께 쓰면 반이산형 ENO 방법이 엔트로피 안정하다.

## 시간 방향의 풀이

시간 방향은 걸음 하나를 앞 [Euler 방법](euler-method.md)의 걸음들의 볼록결합으로 쓴 [Runge–Kutta 방법](runge-kutta-methods.md), 곧 [강한 안정성 보존 Runge–Kutta 방법](ssp-runge-kutta-methods.md)(strong stability preserving Runge–Kutta method)으로 푼다.[^2] 시간 간격 조건 아래에서 앞 Euler 걸음이 어떤 노름을 늘리지 않으면 볼록결합도 늘지 않으므로, 앞 Euler 걸음의 안정성이 높은 차수의 시간 풀이에 그대로 옮겨 간다. 3 단 3 차 방법이 흔히 쓰인다.

## 가중 ENO

스텐실 고르기는 거의 같은 두 차이 사이에서 결과가 갑자기 바뀌고, 고르지 않은 스텐실의 정보를 버린다. [WENO 방법](weno-schemes.md)(weighted essentially non-oscillatory scheme)은 후보 스텐실 $k$ 개의 경계값을 모두 계산해, 매끄러운 정도로 정한 가중치로 볼록결합한다.[^4] 해가 매끄러우면 가중치가 미리 정한 값에 가까워져 $2k-1$ 차 정확도가 나오고, 계단을 지나는 스텐실의 가중치는 $0$ 에 가까워진다.

# 활용

- 압축성 흐름. 충격파와 매끄러운 와류가 함께 있는 흐름을 높은 차수로 계산할 때 ENO 와 WENO 방법을 쓴다.[^4]
- [Hamilton–Jacobi 방정식](hamilton-jacobi-equation.md)과 등위면 방법(level set method). 경계면을 함수의 등위면으로 옮기는 계산에서 기울기를 ENO 방식으로 재구성한다.
- 다항식 보간. 같은 스텐실 고르기를 점값에 적용한 ENO 보간은 끊김이 있는 함수의 보간에서 끊김 근처의 진동을 막는다.

[^1]: A. Harten, B. Engquist, S. Osher, S. R. Chakravarthy, "Uniformly high order accurate essentially non-oscillatory schemes, III", *Journal of Computational Physics* 71 (1987), 231–303.

[^2]: C.-W. Shu, S. Osher, "Efficient implementation of essentially non-oscillatory shock-capturing schemes", *Journal of Computational Physics* 77 (1988), 439–471.

[^3]: U. S. Fjordholm, S. Mishra, E. Tadmor, "ENO reconstruction and ENO interpolation are stable", *Foundations of Computational Mathematics* 13 (2013), 139–159.

[^4]: G.-S. Jiang, C.-W. Shu, "Efficient implementation of weighted ENO schemes", *Journal of Computational Physics* 126 (1996), 202–228.

# 연관 문서

## 선수지식

- [MUSCL 방법](muscl-method.md)

## 더 알아보기

- [WENO 방법](weno-schemes.md)

#functional_analysis #analysis #computation
