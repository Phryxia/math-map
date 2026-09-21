# Burnside 보조정리

# 개요

Burnside 보조정리는 [군 작용](group-actions.md)의 궤도 개수를 각 군 원소가 고정하는 점의 개수의 평균으로 준다. 대칭으로 같다고 보는 배치가 몇 가지인지를 배치를 직접 분류하지 않고 세는 방법이다.

Cauchy 와 Frobenius 가 먼저 썼고 Burnside 의 교과서를 통해 퍼져서 Cauchy–Frobenius 보조정리라고도 한다.

# 직관

구슬 $4$ 개를 원형으로 꿴 목걸이를 검정과 흰색 두 가지로 칠한다. 회전해서 같아지는 것을 같은 목걸이로 볼 때 몇 가지가 있는지 센다.

칠하는 방법은 $2^4=16$ 가지다. 회전은 $0^\circ,90^\circ,180^\circ,270^\circ$ 네 가지이므로 $16$ 을 $4$ 로 나누어 $4$ 가지라고 답하기 쉽다. 직접 세어 보면 $6$ 가지다. 검정 $0$ 개가 한 가지, $1$ 개가 한 가지, $2$ 개가 두 가지(이웃한 것과 마주 본 것), $3$ 개가 한 가지, $4$ 개가 한 가지다.

나눗셈이 틀린 이유는 배치마다 옮겨지는 개수가 다르기 때문이다. 검정과 흰색이 번갈아 놓인 배치는 $180^\circ$ 회전으로 자기 자신이 되므로 회전 네 개가 서로 다른 배치를 주지 않고 두 개만 준다. 이런 배치를 네 개로 세면 실제보다 많이 센 것이다.

자기 자신으로 가는 경우를 빼지 말고 아예 함께 세면 어떻게 되는지 본다. 회전마다 그 회전으로 변하지 않는 배치의 수를 센다. $0^\circ$ 는 $16$ 개 전부, $90^\circ$ 와 $270^\circ$ 는 네 구슬이 모두 같은 색인 $2$ 개, $180^\circ$ 는 마주 본 구슬끼리 같은 색인 $4$ 개다. 평균은

$$
\frac{16+2+4+2}{4}=6
$$

이고 직접 센 값과 같다. 자기 자신으로 가는 횟수가 많은 배치일수록 나눗셈에서 덜 세어졌는데, 고정되는 횟수를 더해 주면 그 차이가 정확히 메워진다.

# 정의

## 고정점 집합

군 $G$ 가 집합 $X$ 에 작용할 때 $g\in G$ 에 대해

$$
\mathrm{Fix}(g)=\lbrace x\in X: g\cdot x=x\rbrace
$$

를 $g$ 의 **고정점 집합**이라 한다. $x\in X$ 의 **안정자**는 $\mathrm{Stab}(x)=\lbrace g\in G: g\cdot x=x\rbrace$ 이고, **궤도**는 $Gx=\lbrace g\cdot x: g\in G\rbrace$ 다. 궤도들의 집합을 $X/G$ 로 쓴다.

# 성질

## 정리

**정리.** $G$ 가 유한군이고 $X$ 가 유한집합이면 다음이 성립한다.

$$
\lvert X/G\rvert=\frac1{\lvert G\rvert}\sum_{g\in G}\lvert\mathrm{Fix}(g)\rvert
$$

**증명.** 집합 $S=\lbrace(g,x)\in G\times X: g\cdot x=x\rbrace$ 를 두 방향으로 센다. $g$ 를 먼저 고정하면 $\lvert S\rvert=\sum_{g}\lvert\mathrm{Fix}(g)\rvert$ 이고, $x$ 를 먼저 고정하면 $\lvert S\rvert=\sum_{x}\lvert\mathrm{Stab}(x)\rvert$ 다.

궤도-안정자 정리가 $\lvert\mathrm{Stab}(x)\rvert=\lvert G\rvert/\lvert Gx\rvert$ 를 주므로 한 궤도 $O$ 안의 원소들에 대한 합은 다음과 같다.

$$
\sum_{x\in O}\frac{\lvert G\rvert}{\lvert O\rvert}=\lvert G\rvert
$$

궤도마다 $\lvert G\rvert$ 가 한 번씩 나오므로 $\lvert S\rvert=\lvert G\rvert\cdot\lvert X/G\rvert$ 이고, 두 식을 견주면 정리가 나온다.

## 켤레류를 쓴 계산

$g$ 와 $hgh^{-1}$ 의 고정점 개수는 같다. $x\mapsto h\cdot x$ 가 두 고정점 집합 사이의 전단사이기 때문이다. 따라서 합을 켤레류 단위로 묶을 수 있다.

$$
\lvert X/G\rvert=\frac1{\lvert G\rvert}\sum_{i}\lvert C_i\rvert\cdot\lvert\mathrm{Fix}(g_i)\rvert
$$

여기서 $C_i$ 는 켤레류이고 $g_i$ 는 그 대표다. 순환군이나 대칭군처럼 켤레류 수가 원소 수보다 훨씬 적은 군에서 계산이 짧아진다.

## 가중치를 붙인 형태

색마다 변수를 두고 고정점 개수 대신 고정되는 색칠의 무게 합을 쓰면 [Pólya 세기 정리](polya-enumeration.md)가 된다. 궤도 수만이 아니라 색을 몇 개씩 쓴 궤도가 각각 몇 개인지까지 나온다.

# 활용

- **목걸이와 주사위.** 회전군이나 회전 + 반사군 아래의 색칠 수를 센다. 정육면체의 면을 $n$ 색으로 칠하는 방법은 회전군의 위수가 $24$ 이고 켤레류가 다섯이라 다섯 항의 합으로 나온다.
- **그래프 동형류.** 정점 $n$ 개인 라벨 없는 [그래프](graphs.md)의 개수는 대칭군 $S_n$ 이 간선 집합의 멱집합에 작용할 때의 궤도 수다.
- **화학의 이성질체 세기.** 분자 골격의 대칭군 아래에서 치환기 배치의 궤도를 센다.
- **열거 알고리즘.** 궤도 대표원을 정규형으로 정하면 중복 없이 배치를 나열할 수 있고, 보조정리가 그 나열의 길이를 미리 알려 준다.

# 연관 문서

## 선수지식

- [군 작용](group-actions.md)

## 더 알아보기

- [Pólya 세기 정리](polya-enumeration.md)

#combinatorics #group_theory #algebra
