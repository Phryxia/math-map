# 비선형 분산 방정식의 산란

# 개요

**산란(scattering)** 은 비선형 분산 방정식의 해가 시간이 오래 지난 뒤 비선형 항이 없는 방정식의 해와 구별되지 않게 되는 현상이다. 3차원 공간에서 한 점 근처에 모인 파동을 [비선형 Schrödinger 방정식](nonlinear-schrodinger-equation.md)으로 흘려 보내면, 파동이 퍼지며 낮아지는 동안 비선형 항은 파동보다 더 빨리 작아진다. 이때 해가 결국 어떤 자유 파동을 따라가는지를 [Strichartz 추정](strichartz-estimates.md)으로 판정한다.

# 직관

방정식 $i\psi_t+\Delta\psi-\vert\psi\vert^2\psi=0$ 의 해를 시각 $t$ 의 자유 파동에 시각 $s$ 마다 들어온 비선형 항 $\vert\psi\vert^2\psi(s)$ 의 기여를 더한 것으로 본다. 자유 방정식은 $L^2$ 노름을 보존하므로 시각 $s$ 의 기여는 $L^2$ 노름이 $\Vert\vert\psi\vert^2\psi(s)\Vert\_{L^2}$ 이하이고, 이것은 $\sup\_x\vert\psi(x,s)\vert^2\cdot\Vert\psi(s)\Vert\_{L^2}$ 이하다.

해가 자유 파동처럼 퍼진다고 놓는다. $\mathbb R^n$ 의 자유 파동은 $L^2$ 노름이 일정하고 최댓값이 $s^{-n/2}$ 의 상수배로 줄어든다. 그러면 시각 $s$ 의 기여는 $s^{-n}$ 의 상수배 이하이고, $s\ge 1$ 의 기여를 모두 더한 크기는 $\int_1^\infty s^{-n}ds$ 로 가늠된다.

$n=3$ 이면 이 적분은 $1/2$ 로 유한하다. 시각 $t$ 이후에 들어오는 기여의 합은 $\int_t^\infty s^{-3}ds=1/(2t^2)$ 이하여서 $t\to\infty$ 에서 $0$ 으로 가므로, 해는 시간이 지날수록 한 자유 파동에 가까워진다. $n=1$ 이면 적분이 $\int_1^\infty s^{-1}ds=\infty$ 여서 기여가 쌓이고, 해가 따라갈 자유 파동이 정해지지 않는다.

# 정의

$\mu=\pm1$ 과 $p\gt 1$ 에 대해 다음 방정식을 생각한다. 비선형 Schrödinger 방정식 문서와 같이 $\mu=1$ 이면 집속형, $\mu=-1$ 이면 발산형이다.

$$
i\psi_t+\Delta\psi+\mu\vert\psi\vert^{p-1}\psi=0
$$

모든 $t\ge 0$ 에서 정의된 해 $\psi$ 가 $t\to+\infty$ 에서 **산란한다** 는 것은 [Sobolev 공간](sobolev-spaces.md)의 원소 $\psi_+\in H^1(\mathbb R^n)$ 이 있어 다음이 성립하는 것이다. $t\to-\infty$ 도 같다.

$$
\lim\_{t\to\infty}\Vert\psi(t)-e^{it\Delta}\psi_+\Vert\_{H^1}=0
$$

$\psi_+$ 를 해의 **끝 상태(asymptotic state)** 라 한다. 직관 절의 $n=3$, $p=3$, $\mu=-1$ 인 경우에 해가 따라가는 자유 파동이 $e^{it\Delta}\psi_+$ 다.

끝 상태 $\psi_+$ 마다 그것을 끝 상태로 갖는 해의 처음 값 $\psi(0)$ 을 대응시키는 사상을 **파동 연산자(wave operator)** $\Omega\_+$ 라 한다. 모든 처음 값의 해가 산란해 $\Omega\_+$ 가 전사이면 **점근 완비성(asymptotic completeness)** 이 성립한다고 한다.

# 성질

## Strichartz 노름에 의한 판정

해 $\psi$ 의 Strichartz 노름 $\Vert\psi\Vert\_{L^q\_tL^r\_x(\lbrack 0,\infty)\times\mathbb R^n)}$ 이 적절한 허용 쌍 $(q,r)$ 에서 유한하면 $\psi$ 는 산란한다. [Duhamel 원리](duhamel-principle.md)로 다음을 쓴다.

$$
e^{-it\Delta}\psi(t)=\psi(0)+i\mu\int_0^te^{-is\Delta}\bigl(\vert\psi\vert^{p-1}\psi\bigr)(s)\thinspace ds
$$

비동차 Strichartz 추정으로 $t_1\lt t_2$ 사이의 적분은 비선형 항의 $\lbrack t_1,t_2\rbrack$ 위 쌍대 노름으로 눌리고, 이 노름은 Strichartz 노름의 꼬리로 눌려 $t_1\to\infty$ 에서 $0$ 으로 간다. 따라서 $e^{-it\Delta}\psi(t)$ 가 Cauchy 수렴하고 그 극한이 $\psi_+$ 다[^1].

## 임계 지수

$\psi$ 가 해이면 $\lambda^{2/(p-1)}\psi(\lambda^2t,\lambda x)$ 도 해다. 이 척도 변환에서 처음 값의 [분수 Sobolev 공간](fractional-sobolev-spaces.md) $\dot H^s$ 노름이 변하지 않는 지수는 다음과 같다.

$$
s_c=\frac n2-\frac2{p-1}
$$

$s_c=0$ 인 $p=1+4/n$ 을 **질량 임계(mass-critical)**, $s_c=1$ 인 $p=1+4/(n-2)$ 를 **에너지 임계(energy-critical)** 라 한다. 직관 절의 $n=3$, $p=3$ 은 $s_c=1/2$ 로 두 임계 사이에 있다. 처음 값이 임계 공간 $\dot H^{s_c}$ 에서 충분히 작으면 [축약사상 고정점 정리](banach-fixed-point.md)로 해가 모든 시각에 존재하고 Strichartz 노름이 유한하므로 산란한다[^1].

## 발산형 방정식의 산란

$n\ge 3$ 이고 $1+4/n\lt p\lt 1+4/(n-2)$ 인 발산형 방정식에서는 $H^1$ 의 모든 처음 값의 해가 산란한다[^2]. 직관 절의 3차원 3차 방정식이 이 범위에 든다. 증명은 [Morawetz 추정](morawetz-estimates.md)으로 해의 시공간 적분 하나를 질량과 에너지로 누르고, 이것으로 Strichartz 노름의 유한성을 얻는다. 에너지 임계인 3차원 5차 발산형 방정식의 산란은 Colliander, Keel, Staffilani, Takaoka, Tao 가 증명했다[^3].

## 집속형 방정식과 바닥 상태

집속형 방정식에는 $e^{it}Q(x)$ 꼴의 해가 있다. 이 해는 퍼지지 않으므로 산란하지 않는다. 에너지 임계 집속형 방정식에서 Kenig 와 Merle 는 $n=3,4,5$ 의 반지름 대칭 처음 값이 정적 해 $W$ 보다 에너지와 기울기 노름이 모두 작으면 해가 산란함을 보였다[^4]. 그 증명은 산란하지 않는 해 가운데 가장 작은 것을 만들고, 그런 해가 존재할 수 없음을 보이는 집중 콤팩트성–강성(concentration compactness–rigidity) 논법이다.

## 장거리 경우

$p\le 1+2/n$ 이면 직관 절의 적분이 발산하는 쪽이다. 이 범위에서는 $0$ 이 아닌 해가 위의 뜻으로 산란하지 않는다[^1]. 1차원 3차 방정식에서는 자유 파동의 위상에 $\log t$ 에 비례하는 보정을 곱한 수정된 산란(modified scattering)이 성립한다[^5].

# 활용

- 양자역학의 산란 이론. 위치에너지가 있는 선형 [Schrödinger 방정식](schrodinger-equation.md)에서 파동 연산자와 점근 완비성이 같은 정의로 쓰이고, 이 문서의 정의는 그 정의를 비선형 항으로 옮긴 것이다.
- 장시간 거동의 분류. 해가 산란하는지, 고립파로 남는지, 유한 시간에 폭발하는지로 처음 값을 나누는 문제를 바닥 상태의 에너지를 기준으로 푼다.
- 광섬유와 물결. 광섬유 속 빛의 펄스나 깊은 물의 물결 묶음을 적는 1차원 3차 방정식에서는 [역산란 변환](inverse-scattering-transform.md)으로 해를 고립파 부분과 수정된 산란을 하는 부분으로 정확히 나눈다.

[^1]: T. Cazenave, *Semilinear Schrödinger Equations*, Courant Lecture Notes in Mathematics 10, American Mathematical Society, 2003, 7 장.
[^2]: J. Ginibre, G. Velo, "Scattering theory in the energy space for a class of nonlinear Schrödinger equations", *Journal de Mathématiques Pures et Appliquées* 64 (1985), 363–401.
[^3]: J. Colliander, M. Keel, G. Staffilani, H. Takaoka, T. Tao, "Global well-posedness and scattering for the energy-critical nonlinear Schrödinger equation in R³", *Annals of Mathematics* 167 (2008), 767–865.
[^4]: C. E. Kenig, F. Merle, "Global well-posedness, scattering and blow-up for the energy-critical, focusing, non-linear Schrödinger equation in the radial case", *Inventiones Mathematicae* 166 (2006), 645–675.
[^5]: T. Ozawa, "Long range scattering for nonlinear Schrödinger equations in one space dimension", *Communications in Mathematical Physics* 139 (1991), 479–493.

# 연관 문서

## 선수지식

- [Strichartz 추정](strichartz-estimates.md)
- [Morawetz 추정](morawetz-estimates.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
