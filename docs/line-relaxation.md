# 선 완화

# 개요

선 완화는 격자의 한 줄에 놓인 미지수를 한꺼번에 푸는 완화법이다. 계수가 방향마다 크게 다른 비등방 문제에서 점별 완화의 평활률이 $1$ 에 가까워지므로, 강하게 결합된 방향을 따라 줄을 잡아 그 줄을 동시에 푼다.

줄 안의 방정식이 [삼중대각계](tridiagonal-systems.md)이므로 한 줄의 비용이 점별 완화의 상수배다. [Fourier 국소 해석](local-fourier-analysis.md)으로 기호를 계산하면 어느 방향에 줄을 놓아야 하는지가 나온다.

# 직관

$-\varepsilon u\_{xx}-u\_{yy}=f$ 를 간격 $h$ 의 정사각 격자에서 $5$ 점 차분으로 이산화하면, $\varepsilon$ 이 작을 때 좌우 이웃과의 결합이 위아래 이웃과의 결합보다 훨씬 약하다. 감쇠 Jacobi 의 기호는 대각 $2\varepsilon+2$ 로 나눈 값이다.

$$
\tilde S_h(\theta)=1-\omega\thinspace\frac{2\varepsilon(1-\cos\theta_1)+2(1-\cos\theta_2)}{2\varepsilon+2}
$$

$\theta_1=\pi$, $\theta_2=0$ 을 넣으면 분자가 $4\varepsilon$ 이므로 $\varepsilon\to0$ 에서 기호가 $1$ 로 간다. 이 모드는 $x$ 방향으로 가장 빠르게 진동하는 고주파라 성긴 격자가 맡지 못하고, 평활자도 줄이지 못하므로 사이클이 멈춘다. 원인은 $x$ 방향으로 진동하는 오차의 잔차가 $\varepsilon$ 배로 작아 갱신량이 나오지 않는 것이므로, $y$ 방향 이웃을 미지수로 남겨 두고 한 줄을 통째로 푼다. 그러면 $y$ 방향 항이 전부 좌변으로 넘어가 이 모드의 기호가 $\varepsilon\to0$ 에서 $0$ 으로 간다.

# 정의

## 모형 문제

$-\varepsilon u\_{xx}-u\_{yy}=f$ 를 간격 $h$ 의 정사각 격자에서 $5$ 점 차분으로 이산화하면 스텐실이 다음과 같다.

$$
\frac{1}{h^2}\begin{pmatrix}0&-1&0\cr-\varepsilon&2\varepsilon+2&-\varepsilon\cr0&-1&0\end{pmatrix}
$$

$\varepsilon$ 이 작으면 좌우 이웃과의 결합이 위아래 이웃과의 결합보다 훨씬 약하다.

## 선 완화

격자 미지수를 줄로 나누고, 한 줄의 미지수를 모두 미지수로 둔 채 그 줄의 방정식을 정확히 푸는 완화를 **선 완화**라 한다. 줄 밖의 이웃은 현재 값을 쓴다.

줄을 좌표축 방향으로 잡으면 줄 안의 방정식이 삼중대각계이므로 Thomas 알고리즘으로 줄 길이에 비례하는 시간에 푼다.

## 절차

```javascript
function yLineRelaxation(u, f, eps, h, nx, ny) {
  for (let i = 1; i < nx - 1; i++) {
    const a = [], b = [], c = [], d = []
    for (let j = 1; j < ny - 1; j++) {
      a[j] = -1                      // u[i][j-1]
      b[j] = 2 * eps + 2             // u[i][j]
      c[j] = -1                      // u[i][j+1]
      d[j] = h * h * f[i][j] + eps * (u[i - 1][j] + u[i + 1][j])
    }
    const line = solveTridiagonal(a, b, c, d)
    for (let j = 1; j < ny - 1; j++) u[i][j] = line[j]
  }
}
```

바깥 반복이 줄을 훑는 순서다. 갱신한 줄의 값을 곧바로 쓰면 Gauss–Seidel 형이고, 훑기를 마친 뒤에 한꺼번에 바꾸면 Jacobi 형이다.

## 교대 선 완화

$x$ 방향 줄과 $y$ 방향 줄을 번갈아 한 번씩 훑는 것을 **교대 선 완화**라 한다. 비등방의 방향이 격자마다 다르거나 미리 알려져 있지 않을 때 쓴다.

# 성질

## 방향의 선택

강하게 결합된 방향을 따라 줄을 놓아야 한다. $x=x_i$ 를 고정한 $y$ 방향 줄을 동시에 푸는 Jacobi 의 기호는 다음과 같다.

$$
\tilde S_h(\theta)=\frac{2\varepsilon\cos\theta_1}{2\varepsilon+2-2\cos\theta_2}
$$

$\theta_2$ 가 $0$ 에서 떨어져 있으면 분모가 $2$ 정도이고 분자는 $\varepsilon$ 정도이므로 $\varepsilon\to0$ 에서 기호가 $0$ 으로 간다. $-\varepsilon u\_{xx}-u\_{yy}$ 에서 $\varepsilon\ll1$ 이면 결합이 강한 쪽이 $y$ 방향이므로 $y$ 방향 줄을 잡는다. 줄을 $x$ 방향으로 놓으면 $\theta_1$ 과 $\theta_2$ 의 자리가 바뀌어 $\varepsilon\to0$ 에서 평활률이 $1$ 로 간다.[^1]

## 남는 모드

$y$ 방향 줄의 기호는 $\theta_2=0$ 에서 $\cos\theta_1$ 이므로 $\varepsilon$ 과 무관하게 $\theta=(\pi,0)$ 근처가 줄지 않는다. Jacobi 형에서는 이 모드가 그대로 남고, 줄을 $x$ 순서로 훑는 Gauss–Seidel 형에서는 기호가

$$
\tilde S_h(\theta)=\frac{\varepsilon e^{\mathrm i\theta_1}}{2\varepsilon+2-2\cos\theta_2-\varepsilon e^{-\mathrm i\theta_1}}
$$

이고 $\theta=(\pi,0)$ 에서 값이 $-1/3$ 이다. 같은 선 완화라도 훑는 순서가 이 모드의 감쇠를 가른다.

## 반좌표 성긴화

줄을 세우는 대신 강한 결합 방향으로만 격자를 성기게 하는 방법이 있다. $\varepsilon\ll1$ 이면 $y$ 방향만 $2h$ 로 늘리고 $x$ 방향은 그대로 둔다. 점 완화가 줄이지 못하던 모드가 성긴 격자에서 저주파가 되므로 성긴 격자 보정이 맡는다.[^1]

두 방법은 비용이 다른 자리에 든다. 선 완화는 평활자를 비싸게 만들고, 반좌표 성긴화는 격자 계층의 점 개수를 늘린다.

## 연산량

줄 하나의 삼중대각계를 푸는 데 미지수당 곱셈 몇 번이 들고, 한 번 훑기의 비용은 격자점 개수에 비례한다. 점 완화 대비 상수배이므로 사이클의 연산량 차수는 바뀌지 않는다.

# 활용

## 비등방 확산

계수가 방향마다 다른 확산 방정식에서 선 완화가 표준 평활자다. 확산 계수가 자리마다 달라 방향이 고정되지 않으면 교대 선 완화를 쓴다.

## 늘어난 격자

계수는 등방이어도 격자 간격이 방향마다 다르면 스텐실이 비등방이 된다. 경계층을 풀려고 한 방향으로 촘촘히 잡은 격자가 그런 경우이고, 촘촘한 방향을 따라 줄을 놓는다.

## 3 차원의 평면 완화

3 차원에서 두 방향이 함께 강하게 결합되면 줄 대신 평면 위의 미지수를 동시에 푼다. 평면 하나를 푸는 것이 2 차원 문제이므로 그 안에서 다시 다중격자를 돌린다.[^1]

[^1]: U. Trottenberg, C. Oosterlee, A. Schüller, *Multigrid*, Academic Press (2001), 5 장. 비등방 문제의 평활률 계산, 선 완화와 반좌표 성긴화의 비교, 3 차원 평면 완화가 실려 있다. 선 완화를 평활자로 쓰는 착상은 A. Brandt, *Multi-level adaptive solutions to boundary-value problems*, Math. Comp. **31** (1977), 333–390 에 있다.

# 연관 문서

## 선수지식

- [Fourier 국소 해석](local-fourier-analysis.md)

## 더 알아보기

- [반좌표 성긴화](semicoarsening.md)

#linear_algebra #algorithms #computation
