# 호모토피 연속법

# 개요

**호모토피 연속법(homotopy continuation)** 은 근을 아는 쉬운 연립방정식을 풀려는 연립방정식으로 조금씩 바꾸면서, 근이 움직이는 경로를 따라가 모든 근을 구하는 수치 방법이다. $x^2-3x+2=0$ 을 [Newton 법](newton-method.md)으로 풀면 출발점에 따라 근 하나를 얻을 뿐이고, 다른 근이 있는지는 알 수 없다. 근이 $\pm 1$ 인 $x^2-1=0$ 에서 출발해 식을 $x^2-3x+2$ 쪽으로 밀면 두 근이 각각 경로를 그리며 움직이고, 경로의 끝이 풀려는 식의 근 전부다.

# 직관

두 식을 매개변수 $t\in\lbrack 0,1\rbrack$ 로 섞는다.

$$
H(x,t)=(1-t)(x^2-1)+t(x^2-3x+2)=x^2-3tx+(3t-1)
$$

$t=0$ 이면 근은 $\pm 1$ 이고, $t=1$ 이면 근은 $1$ 과 $2$ 다. 근의 공식으로 풀면 판별식이 $(3t-2)^2$ 이므로 두 근은 $x=1$ 과 $x=3t-1$ 이다. $-1$ 에서 출발한 근은 $3t-1$ 을 따라 $2$ 로 가고, $1$ 에서 출발한 근은 그대로 있다.

$t=2/3$ 에서 판별식이 $0$ 이 되어 두 경로가 $x=1$ 에서 만난다. $t$ 를 조금씩 늘리며 Newton 법으로 근을 따라가면 이 점 근처에서 어느 경로를 따라가는지 구분할 수 없고, 두 경로가 같은 근에 도착할 수 있다.

첫 식에 복소수 $\gamma$ 를 곱해 $(1-t)\gamma(x^2-1)+t(x^2-3x+2)$ 로 섞으면 판별식은 $(t-2\gamma(1-t))^2$ 이 된다. 이것이 $0$ 인 $t$ 는 $t/(1-t)=2\gamma$ 를 만족하므로, $\gamma$ 가 양의 실수가 아니면 $\lbrack 0,1)$ 에서 두 경로가 만나지 않는다. 경로는 복소평면을 지나 끝점 $2$ 와 $1$ 에 따로 도착한다.

# 정의

$f=(f_1,\dots,f_n)$ 을 $n$ 변수 다항식 $n$ 개, $g$ 를 근을 모두 아는 같은 크기의 연립방정식이라 한다. $\gamma\in\mathbb C$ 에 대해 다음을 $g$ 에서 $f$ 로 가는 **호모토피(homotopy)** 라 한다.

$$
H(x,t)=(1-t)\thinspace\gamma\thinspace g(x)+t\thinspace f(x),\qquad t\in\lbrack 0,1\rbrack
$$

$g$ 의 근 $x_0$ 에서 출발해 $H(x(t),t)=0$, $x(0)=x_0$ 을 만족하는 곡선 $x(t)$ 를 근의 **경로(path)** 라 한다. 직관 절의 예에서 경로는 $x(t)=1$ 과, $\gamma=1$ 일 때 $x(t)=3t-1$ 이다.

$f_i$ 의 차수가 $d_i$ 일 때 $g_i(x)=x_i^{d_i}-1$ 로 잡은 $g$ 를 전체 차수 출발계(total degree start system)라 한다. 근은 각 좌표가 $d_i$ 제곱근 $1$ 인 점 $d_1\cdots d_n$ 개다.

경로를 따라가는 방법을 예측-교정법(predictor-corrector method)이라 한다. $H(x(t),t)=0$ 을 $t$ 로 미분하면 $\partial_xH\cdot x'+\partial_tH=0$ 이다. 이 식으로 $x'$ 을 구해 $t$ 를 $\Delta t$ 만큼 늘린 점을 예측하고, 그 $t$ 에서 Newton 법 몇 번으로 $H(\cdot,t)=0$ 의 근에 붙인다.

```javascript
function trackPath(H, dHdx, dHdt, x0, steps) {
  let x = x0;
  for (let k = 0; k < steps; k++) {
    const t = k / steps, dt = 1 / steps;
    const v = solve(dHdx(x, t), neg(dHdt(x, t))); // 예측: x' 을 구한다
    x = add(x, scale(v, dt));
    for (let i = 0; i < 3; i++) {                   // 교정: t+dt 에서 Newton 법
      x = sub(x, solve(dHdx(x, t + dt), H(x, t + dt)));
    }
  }
  return x;
}
```

# 성질

## 감마 기법

정리. 전체 차수 출발계를 쓰고 $\gamma$ 를 유한 개의 실수 반직선 밖에서 고르면, $t\in\lbrack 0,1)$ 에서 $d_1\cdots d_n$ 개의 경로가 모두 매끄럽고 서로 만나지 않는다. $f$ 의 고립근은 모두 어떤 경로의 $t\to 1$ 극한이다.[^1]

증명의 요지. $H(\cdot,t)$ 가 중근을 갖거나 근이 무한원으로 가는 $(\gamma,t)$ 는 다항식 하나의 영점이다. $t$ 를 고정하면 이 조건은 $\gamma(1-t)/t$ 의 값 유한 개로 정해지므로, 나쁜 $\gamma$ 는 원점에서 나가는 반직선 유한 개 위에 있다. 직관 절에서는 그 반직선이 양의 실수 축이다. 실수 2차원인 복소평면에서 반직선은 넓이가 $0$ 이므로 $\gamma$ 를 무작위로 뽑으면 확률 $1$ 로 피한다.

## 경로의 수

전체 차수 출발계의 경로는 Bézout 수 $d_1\cdots d_n$ 개다. $f$ 의 근이 그보다 적으면 남는 경로는 $t\to 1$ 에서 무한원으로 간다. 직관 절의 예는 $d_1=2$ 이고 근도 둘이라 빠져나가는 경로가 없다.

$f$ 의 단항식이 적으면 Huber 와 Sturmfels 의 다면체 호모토피(polyhedral homotopy)를 쓴다.[^2] 이 방법은 계수에 $t$ 의 거듭제곱을 붙여 [Bernstein–Kushnirenko 정리](bernstein-kushnirenko.md)의 증명을 따라가고, 경로의 수가 Newton 다면체의 혼합부피에 $n!$ 을 곱한 값이다.

## 평균 계산량

계수를 Gauss 분포에서 뽑은 연립방정식의 근 하나를 근사하는 문제에서, Beltrán 과 Pardo 는 출발계도 무작위로 고르는 호모토피로 평균 다항시간 알고리즘을 얻었다.[^3] Lairez 는 출발계를 무작위로 고르지 않는 결정적 판본을 얻었다.[^4] 이 물음은 Smale 의 17 번째 문제(Smale's 17th problem)로 제기된 것이다.

# 활용

- 공학의 연립방정식. 평면 기구의 역기구학처럼 근의 개수가 Bézout 수보다 훨씬 적은 연립방정식을 다면체 호모토피로 푼다.[^1]
- 수치 대수기하. 경로의 끝점을 모아 양의 차원 해집합의 성분을 일반 점으로 표현하고, 성분마다 차원과 차수를 계산한다.[^1]
- 근의 개수 확인. 다면체 호모토피의 경로 수가 Bernstein–Kushnirenko 정리의 상한과 같으므로, 끝점을 세어 계수가 일반적인지 확인한다.

[^1]: Andrew J. Sommese and Charles W. Wampler, *The Numerical Solution of Systems of Polynomials Arising in Engineering and Science*, World Scientific, 2005, ch. 7–8.
[^2]: Birkett Huber and Bernd Sturmfels, "A polyhedral method for solving sparse polynomial systems", Mathematics of Computation 64 (1995), 1541–1555.
[^3]: Carlos Beltrán and Luis Miguel Pardo, "Smale's 17th problem: average polynomial time to compute affine and projective solutions", Journal of the American Mathematical Society 22 (2009), 363–385.
[^4]: Pierre Lairez, "A deterministic algorithm to compute approximate roots of polynomial systems in polynomial average time", Foundations of Computational Mathematics 17 (2017), 1265–1292.

# 연관 문서

## 선수지식

- [Newton 법](newton-method.md)
- [Bernstein–Kushnirenko 정리](bernstein-kushnirenko.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #computation #analysis
