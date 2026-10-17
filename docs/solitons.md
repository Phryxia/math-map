# 솔리톤

# 개요

**솔리톤(soliton)** 은 모양과 속도를 유지하며 움직이고 서로 충돌한 뒤에도 모양과 속도를 되찾는 고립파다. 분산은 뭉친 파를 퍼뜨리고 비선형 항은 파를 쏠려 끊지만, 두 효과가 함께 있으면 상쇄가 일어나 모양이 유지되는 해가 나온다.

Korteweg–de Vries 방정식(KdV)의 솔리톤은 $\mathrm{sech}^2$ 꼴이고, [역산란 변환](inverse-scattering-transform.md)에서 반사계수가 $0$ 인 산란 자료에 대응한다. 충돌이 모양을 바꾸지 않는 까닭도 그 자료에서 묶인 상태의 고윳값이 보존되기 때문이다.

# 직관

분산만 있는 방정식에서는 뭉친 파가 퍼진다. $u\_t+u\_{xxx}=0$ 에 $e^{i(kx-\omega t)}$ 를 넣으면 $\omega=-k^3$ 이므로 성분마다 속도가 $-k^2$ 로 다르다. 여러 $k$ 를 겹쳐 만든 봉우리는 성분들이 서로 다른 속도로 흘러 시간이 지나면 넓게 흩어진다.

비선형 항만 있는 방정식에서는 파가 끊긴다. $u\_t=6uu\_x$ 에서 각 점이 자기 높이에 비례하는 속도로 움직이므로 높은 쪽이 낮은 쪽을 따라잡고, 유한 시간에 기울기가 무한이 되어 해가 이어지지 않는다.

둘을 함께 둔 $u\_t=6uu\_x-u\_{xxx}$ 에서 모양이 변하지 않는 해를 찾는다. $u=\phi(x-ct)$ 를 넣으면

$$
-c\phi'=6\phi\phi'-\phi'''
$$

이고, 한 번 적분하고 $\phi$ 와 도함수가 먼 곳에서 $0$ 으로 가는 조건을 쓰면 $\phi''=3\phi^2+c\phi$ 다. 양변에 $\phi'$ 를 곱해 다시 적분하면 $(\phi')^2=\phi^2(2\phi+c)$ 가 되고, 이 [상미분방정식](ordinary-differential-equations.md)의 해가 $\phi=-2\kappa^2\mathrm{sech}^2(\kappa\xi)$ 와 $c=4\kappa^2$ 다. 깊이 $2\kappa^2$ 과 속도 $4\kappa^2$ 이 같은 $\kappa$ 로 정해지므로 깊은 봉우리가 빠르다.

# 정의

편미분방정식의 **이동파 해**는 $u(x,t)=\phi(x-ct)$ 꼴의 해다. $\phi$ 가 $\vert\xi\vert\to\infty$ 에서 $0$ 으로 가고 유계이면 **고립파**라 한다.

고립파 가운데 **솔리톤**은 다음 둘을 더 만족하는 것이다. 여러 개를 겹친 초기값에서 각각이 자기 속도로 움직이는 해가 있고, 그 해에서 고립파들이 충돌한 뒤 모양과 속도를 되찾으며 위치만 옮겨진다.

둘째 조건은 역산란 변환이 적용되는 방정식에서 성립한다. 모양을 유지하는 고립파가 있어도 충돌에서 모양이 깨지는 방정식이 있으므로, 고립파와 솔리톤은 같은 것이 아니다.

# 성질

## Hirota 쌍선형 꼴

$u=-2\partial\_x^2\log f$ 로 두면 KdV 가 $f$ 에 대한 쌍선형 방정식이 된다. 지수함수의 유한 합을 $f$ 에 넣어 해를 얻는 방법을 **Hirota 방법**이라 한다.[^1]

$f=1+e^{\theta}$ 와 $\theta=2\kappa(x-4\kappa^2t)+\delta$ 를 넣으면

$$
u=-2\partial\_x^2\log(1+e^{\theta})=-2\kappa^2\mathrm{sech}^2\lbrack\kappa(x-4\kappa^2t)+\delta/2\rbrack
$$

이고 직관 절의 고립파와 같다. $\delta$ 는 봉우리의 위치를 옮긴다.

## 2 솔리톤

$\kappa\_1\ne\kappa\_2$ 에서

$$
f=1+e^{\theta\_1}+e^{\theta\_2}+A\_{12}e^{\theta\_1+\theta\_2},\qquad A\_{12}=\left(\frac{\kappa\_1-\kappa\_2}{\kappa\_1+\kappa\_2}\right)^2
$$

을 넣으면 해가 나온다.[^1] $\theta\_i=2\kappa\_i(x-4\kappa\_i^2t)+\delta\_i$ 다.

$t\to-\infty$ 에서 이 해는 깊이 $2\kappa\_1^2$ 과 $2\kappa\_2^2$ 인 봉우리 둘로 갈라지고, $t\to+\infty$ 에서도 같은 깊이의 봉우리 둘로 갈라진다. 바뀌는 것은 두 봉우리의 위치이고, 그 차이가 $A\_{12}$ 로 정해진다. 빠른 쪽이 앞으로, 느린 쪽이 뒤로 밀린다.

$A\_{12}$ 는 $\kappa\_1$ 과 $\kappa\_2$ 가 가까울 때 $0$ 에 가깝고 멀 때 $1$ 에 가깝다. 깊이가 비슷한 두 솔리톤이 더 크게 밀린다.

## 충돌의 탄성

**정리.** KdV 의 $N$ 솔리톤 해에서 충돌 전후의 고립파의 깊이와 속도가 같다.

역산란 변환으로 보면 이 해의 산란 자료는 반사계수가 $0$ 이고 묶인 상태가 $\kappa\_1,\dots,\kappa\_N$ 인 것이다. 묶인 상태의 고윳값 $-\kappa\_n^2$ 은 등스펙트럼성에서 시간에 변하지 않고, 각 고립파의 깊이 $2\kappa\_n^2$ 과 속도 $4\kappa\_n^2$ 이 그 고윳값으로 정해진다. 시간에 변하는 것은 규격화 상수 $c\_n$ 뿐이고 그것이 위치에 대응한다. ∎

선형 방정식의 중첩과 다르다. 두 솔리톤이 겹친 동안의 모양은 각각의 합이 아니고, 겹침이 끝난 뒤에 각각이 되살아난다.

## 다른 방정식의 솔리톤

| 방정식 | 솔리톤 |
| --- | --- |
| Korteweg-de Vries | $\mathrm{sech}^2$ 꼴, 한 방향 |
| 비선형 Schrödinger | 포락선이 $\mathrm{sech}$ 꼴, 위상이 함께 돈다 |
| sine-Gordon | kink 와 antikink, 폭이 속도로 줄어든다 |
| Toda 격자 | 이산 변수의 $\mathrm{sech}^2$ 꼴 |

넷 다 Lax 쌍을 갖고 역산란 변환이 적용된다. 모양을 유지하는 고립파가 있으나 충돌에서 모양이 깨지는 방정식도 있고, 그 경우 수치 계산에서 충돌 뒤 작은 파가 남는다.[^2]

# 활용

- [역산란 변환](inverse-scattering-transform.md)에서 반사계수가 $0$ 인 산란 자료에 대응한다. 그 경우 Gelfand-Levitan-Marchenko 방정식이 유한 차원 선형계가 되어 닫힌 꼴로 풀리고, 결과가 $N$ 솔리톤 해의 행렬식 공식이다.
- [Lax 쌍](lax-pairs.md)의 등스펙트럼성이 충돌의 탄성을 준다. 깊이와 속도가 고윳값으로 적히고 고윳값이 보존되므로, 충돌이 바꿀 수 있는 것은 위치뿐이다.
- [적분가능계](integrable-systems.md)의 무한차원 판본에서 작용 변수에 대응한다. 유한 자유도에서 작용 변수가 보존량이고 각 변수가 선형으로 흐르는 것처럼, $\kappa\_n$ 이 보존량이고 $\log c\_n$ 이 선형으로 흐른다.

[^1]: Ryogo Hirota, "Exact solution of the Korteweg-de Vries equation for multiple collisions of solitons", *Physical Review Letters* 27 (1971), 1192-1194. 쌍선형 꼴과 $N$ 솔리톤 해의 지수함수 전개, 위상 이동 계수가 여기 있다.
[^2]: Mark J. Ablowitz, Peter A. Clarkson, *Solitons, Nonlinear Evolution Equations and Inverse Scattering*, Cambridge University Press, 1991, 1 장과 4 장. 여러 방정식의 솔리톤, 충돌의 탄성, 적분가능하지 않은 경우의 차이를 다룬다.

# 연관 문서

## 선수지식

- [역산란 변환](inverse-scattering-transform.md)

## 더 알아보기

- [sine-Gordon 방정식](sine-gordon-equation.md)

#analysis #differential_geometry
